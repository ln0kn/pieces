<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;
use App\Client;
use App\Compte;
use App\Vente;
use App\ArticleVente;
use App\Stock;
use JWTAuth;
class VenteController extends Controller
{
    public function __construct()
     {
        $this->user = JWTAuth::parseToken()->authenticate();
        $this->middleware('droit');
     }
    
    public function addVente(Request $request){
        $valide = Validator::make($request->all(), [
          '0.*.prixU' => 'required',
          '0.*.prixTotal' => 'required',
          '0.*.article.id' => 'required|integer',
          '0.*.coram' => 'nullable|integer',
          '0.*.rakieta' => 'nullable|integer',
          '0.*.boutique' => 'nullable|integer',
          '1.client' => 'required',
          '1.montantFacture' => 'nullable|integer',
          '1.remise' => 'nullable|integer',
          '1.sommeVerseRestante' => 'nullable|integer',
          '1.sommeVersee' => 'nullable|integer',
        ]);
        if ($valide->fails()) {
          return response()->json([
            'fail' =>true,
            'errors' => $valide->errors()
          ]);
        }      
        
        //identifiant de la veente
        $timestamp = strtotime(now());
        $day = date('d', $timestamp);
        $month = date('m', $timestamp);
        $year = date('y', $timestamp);
        $results = Vente::latest('id')->first();
        $results = 'Vte/'.$day.'/'.$month.'/'.$year.'/n°'.(($results)?$results['id']+1:1);
        $vente = $request[0];
        $client = $request[1];
        $qty = 0;
        $lieu = 0;
        $variation = ($client['sommeRestante'] > 0)? - $client['sommeRestante']:$client['sommeRestante'];
        $soldeActuel = ($client['sommeRestante'] > 0)? - $client['sommeRestante']:$client['sommeRestante'];
        $vente = $request[0];
        $client = $request[1];
        $net =($client['remise'])? $client['montantFacture'] - $client['remise'] : $client['montantFacture'] ;
        $prixT =$client['montantFacture'];
        $restante =$client['sommeRestante'];
        $remise =($client['remise'])? $client['remise'] : 0;
        $versee =$client['sommeVersee'];
        $cl = 0;
        $donnee = [];
        
        foreach($vente as $item){
            //recuoere la quantite et le lieu de vente
            if($item['boutique'] > 0){
                $qty = $item['boutique'];
                $lieu = 1;
            }else{
                if($item['rakieta'] > 0){
                    $qty = $item['rakieta'];
                    $lieu = 2;
                }
                else{
                    $qty = $item['coram'];
                    $lieu = 3;
                }
            } 
            //verifiez si le stock est suffisant pour effectuer la vente
            $stk = Stock::where('type_id',$item['article']['id']) -> where('magasin_id',$lieu) -> latest('id')->first();
            if($stk['quantiteActuelle'] >= $qty){
            }else{
                return response()->json(['fail' =>true,'errors' =>[['Stock inssuffisant. Veuillez vérifiez le stock avant d\' effectuer cette vente']]]);
            }    
        }  
        
        
//        interaction avec le compte client
//        le client existe dans la base de donnees
        if($client['client'] > 0){
            $cli = Client::find($client['client']);
            $cpt = Compte::where('client_id',$cli->id)->latest('id')->first();
            $compte= new Compte();
            $compte -> soldeAnterieur = $cpt['soldeActuel'];
            $compte -> soldeActuel = $cpt['soldeActuel'] - $client['sommeRestante'] ;
            $compte -> variation = $client['sommeRestante'];
            $compte -> client_id = $cli -> id ;
            $compte -> save();    
        }
        //le client n existe pas dans la base de donnees et n a pas de compte
        else{
            $var =explode(" ",$client['client']); 
            
            //creation d un nouveai client et de son compte
            $client = new Client();
            $client -> nomClient = $var[0] .' '.$var[1];
            $client -> telephoneClient = $var['2'];
            $client -> save();
            
            $compte = new Compte();
            $compte -> soldeAnterieur = 0 ;
            $compte -> variation =$variation ;
            $compte -> soldeActuel =$soldeActuel;
            $compte -> client_id = $client -> id;
            $compte -> save() ;
        }
        $cl =($client['client'] > 0)? $client['client'] : $client -> id;    
        
        //      effectuer la vente
        $vte = new Vente();
        $vte -> referenceVente = $results;
        $vte -> remise = $remise;
        $vte -> netAPayer= $net;
        $vte -> prixTotal= $prixT;
        $vte -> sommeVersee= $versee;
        $vte -> reliquat = $restante;
        $vte -> client_id= $cl;
        $vte -> save();
        
        foreach($vente as $item){
            //recuoere la quantite et le lieu de vente
            if($item['boutique'] > 0){
                $qty = $item['boutique'];
                $lieu = 1;
            }else{
                if($item['rakieta'] > 0){
                    $qty = $item['rakieta'];
                    $lieu = 2;
                }
                else{
                    $qty = $item['coram'];
                    $lieu = 3;
                }
            } 
            $stk = Stock::where('type_id',$item['article']['id'])-> where('magasin_id',$lieu) -> latest('id')->first();
            $stock = new Stock();
            $stock -> quantiteAnterieure = $stk['quantiteActuelle'];
            $stock -> variation = $qty;
            $stock -> quantiteActuelle = $stk['quantiteActuelle'] - $qty;
            $stock -> vente_id = $vte -> id;
            $stock -> type_id = $item['article']['id'];
            $stock -> magasin_id= $lieu;
            $stock ->  save(); 
            
            $av = new ArticleVente();
            $av -> quantite = $qty;
            $av -> prixUnitaire =$item['prixU'] ;
            $av -> type_id = $item['article']['id'];
            $av -> magasin_id = $lieu;
            $av -> vente_id = $vte -> id;
            $av -> save() ; 
        }
        $f = new \NumberFormatter("fr", \NumberFormatter::SPELLOUT);
        $vv =Vente::find($vte['id']);
        $tab = [];
        $dsg = [];
        $pt = [];
        $quantite = [];
        $designation = [];
        $vv -> client -> compte ;
        foreach($vv -> articles as $k => $val){
            $val -> article ;
            $donnee[$val['pivot']['magasin_id']][$k] =$val ; 
            if(isset($quantite[$val['pivot']['magasin_id']][$val['pivot']['type_id']])){
                $quantite[$val['pivot']['magasin_id']][$val['pivot']['type_id']] += $val['pivot']['quantite'] ;
            }
            else{
                $quantite[$val['pivot']['magasin_id']][$val['pivot']['type_id']] = $val['pivot']['quantite'] ;
            }
            $dsg[$val['pivot']['magasin_id']][$val['pivot']['type_id']] = $val['article']['designation'].' '.$val['nomType'];
//            dd($val);
            
        }
//        foreach($pt as $o => $va){
//            foreach($va as $j => $var){
//                var_dump($quantite[$o][$j]);
//            }
//        }
        
        if($request[1]['bon'])
            $vv['bon'] = $donnee;
//        return $vv;
//        dd();
//        return $pt;
//        return $dsg;
        $pdf = \PDF::loadView('etats.venteFacture',['data'=>$vv,'designation'=>$dsg,'qt'=>$quantite,'trad'=>$f->format($vv['prixTotal'])]);
        $pdf->save(storage_path().'_filename.pdf');
        
    return $pdf->download($results.'.pdf');
    }
    
    public function getVente(){      
        return Vente::with('client.compte')->with('articles.article')->get();
    }
    
    public function editVente(Request $request){ 
        $valide = Validator::make($request->all(), [
          'vente.*.prixU' => 'required',
          'vente.*.prixTotal' => 'required',
          'vente.*.article.id' => 'required|integer',
          'vente.*.coram' => 'nullable|integer',
          'vente.*.rakieta' => 'nullable|integer',
          'vente.*.boutique' => 'nullable|integer',
          'client' => 'required',
          'montantFacture' => 'required|integer',
          'remise' => 'required|integer',
          'sommeRestante' => 'required|integer',
          'sommeVersee' => 'required|integer',
          'id' => 'required|integer',
        ]);
        if ($valide->fails()) {
          return response()->json([
            'fail' =>true,
            'errors' => $valide->errors()
          ]);
        }
        
        $vente = $request['vente'];
        
        foreach($vente as $item){
            
            //recuoere la quantite et le lieu de vente
            if($item['boutique'] > 0){
                $qty = $item['boutique'];
                $lieu = 1;
            }else{
                if($item['rakieta'] > 0){
                    $qty = $item['rakieta'];
                    $lieu = 2;
                }
                else{
                    $qty = $item['coram'];
                    $lieu = 3;
                }
            } 
            //verifiez si le stock est suffisant pour effectuer la vente
            $stk = Stock::where('type_id',$item['article']['id']) -> where('magasin_id',$lieu) -> where('vente_id',$request['id'])-> latest('id')->first();
            $stkPrime = Stock::where('type_id',$item['article']['id']) -> where('magasin_id',$lieu) -> latest('id')->first();
            if($stkPrime['quantiteActuelle'] +$stk['variation'] >= $qty){
            }else{
                return response()->json(['fail' =>true,'errors' =>[['Stock inssuffisant. Veuillez vérifiez le stock avant d\' effectuer cette vente']]]);
            }    
        } 
        
        $cli = Client::find($request['client']);
        $cpt = Compte::where('client_id',$cli->id)->latest('id')->first();
        $compte= new Compte();
        $compte -> soldeAnterieur = $cpt['soldeActuel'];
        $compte -> soldeActuel = $cpt['soldeActuel'] - $request['sommeRestante'] ;
        $compte -> variation = $request['sommeRestante'];
        // $compte -> vente_id = $vte -> id;
        $compte -> client_id = $cli -> id ;
        $compte -> save();
        
        
        //select la vente
        $vte = Vente::find($request['id']);
        //      modifier la vente
        $vte -> remise = $request['remise'];
        $vte -> netAPayer= $request['montantFacture'] - $request['remise'];
        $vte -> prixTotal= $request['montantFacture'];
        $vte -> sommeVersee= $request['sommeVersee'];
        $vte -> reliquat = $request['sommeRestante'];
        $vte -> client_id= $request['client'] ;
        $vte -> save();        
        $tab = [];
        //remettre les stocks avant la vente a modifier
        foreach ($vte -> stocks as $key => $val) {
          // obtenir le stock actuel du produit
          $lastSt = Stock::where('type_id',$val['type_id']) -> where('magasin_id',$val['magasin_id']) -> latest('id')->first();
            $tab[$key] = $val;
          $stock = new Stock();
          $stock -> quantiteAnterieure = $lastSt['quantiteActuelle'];
          $stock -> variation = $val['variation'];
          $stock -> quantiteActuelle = $lastSt['quantiteActuelle'] + $val['variation'];
//          $stock -> vente_id = $val['vente_id'];
          $stock -> type_id = $val['type_id'];
          $stock -> magasin_id= $val['magasin_id'];
          $stock -> save();

          $val -> delete();
        }
        
        $vte -> articles() -> detach();
        
        foreach($vente as $item){
            //recuoere la quantite et le lieu de vente
            if($item['boutique'] > 0){
                $qty = $item['boutique'];
                $lieu = 1;
            }else{
                if($item['rakieta'] > 0){
                    $qty = $item['rakieta'];
                    $lieu = 2;
                }
                else{
                    $qty = $item['coram'];
                    $lieu = 3;
                }
            } 
            
    
            $stk = Stock::where('type_id',$item['article']['id'])-> where('magasin_id',$lieu) -> latest('id')->first();
            $stkPrime = Stock::where('type_id',$item['article']['id'])-> where('magasin_id',$lieu)-> where('vente_id',$request['id']) -> latest('id')->first();
            $stock = new Stock();
            $stock -> quantiteAnterieure = $stk['quantiteActuelle'];
            $stock -> variation = $qty;
            $stock -> quantiteActuelle = $stk['quantiteActuelle'] - $qty ;
            $stock -> vente_id = $request['id'];
            $stock -> type_id = $item['article']['id'];
            $stock -> magasin_id= $lieu;
            $stock ->  save(); 
            
            $av = new ArticleVente();
            $av -> quantite = $qty;
            $av -> prixUnitaire =$item['prixU'] ;
            $av -> type_id = $item['article']['id'];
            $av -> magasin_id = $lieu;
            $av -> vente_id = $vte -> id;
            $av -> save() ; 
        }
        
        $vv =Vente::find($vte['id']);
        $vv -> client -> compte ;
        foreach($vv -> articles as $val)
        $val -> article ;
        
        return $vv;
    }
    
    public function deleteVente(Request $request){
        $valide = Validator::make($request->all(), [
          'id' => 'required|integer',
        ]);
        if ($valide->fails()) {
          return response()->json([
            'fail' =>true,
            'errors' => $valide->errors()
          ]);
        }
        $vente = Vente::find($request['id']);
        $cpt = Compte::where('client_id',$vente['client_id'])->latest('id')->first();
        $compte= new Compte();
        $compte -> soldeAnterieur = $cpt['soldeActuel'] ;
        $compte -> soldeActuel = $cpt['soldeActuel'] + $vente['sommeVersee'];
        $compte -> variation = $vente['sommeVersee'];
        $compte -> client_id = $vente['client_id'];
        $compte -> save();
        
        foreach($vente -> articles as $value){
            $stk = Stock::where('type_id',$value['pivot']['type_id'])-> where('magasin_id',$value['pivot']['magasin_id']) -> latest('id')->first();
            $stock = new Stock();
            $stock -> quantiteAnterieure = $stk['quantiteActuelle'];
            $stock -> variation = $value['pivot']['quantite'];
            $stock -> quantiteActuelle = $stk['quantiteActuelle'] + $value['pivot']['quantite'];
//            $stock -> vente_id = $request['id'];
            $stock -> type_id = $value['pivot']['type_id'];
            $stock -> magasin_id= $value['pivot']['magasin_id'];
            $stock -> save();
//            $value -> delete();
        }
        $vente -> stocks() -> delete();
        $vente ->articles() -> detach();
        $vente -> delete();   
        return $vente;
    }
}