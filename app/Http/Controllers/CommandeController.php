<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;
use App\Stock;
use App\Client;
use App\Compte;
use App\Vente;
use App\Commande;
use App\ArticleVente;
use App\ArticleCommande;

class CommandeController extends Controller
{
    
    public function addCommande(Request $request){
        $valide = Validator::make($request->all(), [
          '0.*.prixU' => 'required',
          '0.*.prixTotal' => 'required',
          '0.*.article.id' => 'required|integer',
          '0.*.coram' => 'nullable|integer',
          '0.*.rakieta' => 'nullable|integer',
          '0.*.boutique' => 'nullable|integer',
          '1.bon' => 'nullable|integer',
          '1.client' => 'required',
          '1.montantFacture' => 'nullable|integer',
          '1.remise' => 'nullable|integer',
          '1.sommeVerseRestante' => 'nullable|integer',
          
        ]);
        if ($valide->fails()) {
          return response()->json([
            'fail' =>true,
            'errors' => $valide->errors()
          ]);
        }
        
        $qty = 0;
        
        //identifiant de la veente
        $timestamp = strtotime(now());
        $day = date('d', $timestamp);
        $month = date('m', $timestamp);
        $year = date('y', $timestamp);
        $results = Commande::latest('id')->first();
        $results = 'Cme/'.$day.'/'.$month.'/'.$year.'/n'.(($results)?$results['id']+1:1);
        $commande = $request[0];
        $client = $request[1];
        $qty = 0;
        $lieu = 0;
        
        foreach($commande as $item){
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
            $stk1 = Stock::where('type_id',$item['article']['id']) -> where('magasin_id',1) -> latest('id')->first();
            $stk2 = Stock::where('type_id',$item['article']['id']) -> where('magasin_id',2) -> latest('id')->first();
            $stk3 = Stock::where('type_id',$item['article']['id']) -> where('magasin_id',3) -> latest('id')->first();
//            dd($stk1['quantiteActuelle'] + $stk2['quantiteActuelle'] + $stk3['quantiteActuelle'] ));
            if(($stk1['quantiteActuelle'] + $stk2['quantiteActuelle'] + $stk3['quantiteActuelle'] ) >= $qty){
            }else{
                return response()->json(['fail' =>true,'errors' =>[['Stock inssuffisant. Veuillez vérifiez le stock avant d\' effectuer cette commande']]]);
            }    
        }  
        
        
        $cme = new Commande();
        $cme -> referenceCommande = $results;
        $cme -> montantCommande= $client['montantFacture'];
        $cme -> nomTel= $client['client'];
        $cme -> save();
        
        foreach($commande as $item){
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
            $av = new ArticleCommande();
            $av -> quantite = $qty;
            $av -> prixUnitaire =$item['prixU'] ;
            $av -> type_id = $item['article']['id'];
            $av -> commande_id = $cme -> id;
            $av -> magasin_id = $lieu;
            $av -> save() ; 
        }
        foreach($cme -> types as $value)
            $value -> article;
        
        return $cme;
    }
    
    public function getCommande(){
        return Commande::with('types.article') ->get();
    }
    
    public function editCommande(Request $request){
        $valide = Validator::make($request->all(), [
          '0.*.prixU' => 'required',
          '0.*.prixTotal' => 'required',
          '0.*.article.id' => 'required|integer',
          '0.*.coram' => 'nullable|integer',
          '0.*.rakieta' => 'nullable|integer',
          '0.*.boutique' => 'nullable|integer',
          '1.bon' => 'nullable|integer',
          'client' => 'required',
          '1.montantFacture' => 'nullable|integer',
          '1.remise' => 'nullable|integer',
          '1.sommeVerseRestante' => 'nullable|integer',
          'id' => 'required|integer',
          
        ]);
        if ($valide->fails()) {
          return response()->json([
            'fail' =>true,
            'errors' => $valide->errors()
          ]);
        }
        
        $commande = $request['vente'];
        $qty = 0;
        $lieu = 0;
        
        $cme =  Commande::find($request['id']);
        $cme -> types()-> detach(); 
        
        foreach($commande as $item){
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
            $stk1 = Stock::where('type_id',$item['article']['id']) -> where('magasin_id',1) -> latest('id')->first();
            $stk2 = Stock::where('type_id',$item['article']['id']) -> where('magasin_id',2) -> latest('id')->first();
            $stk3 = Stock::where('type_id',$item['article']['id']) -> where('magasin_id',3) -> latest('id')->first();
            
            if(($stk1['quantiteActuelle'] + $stk2['quantiteActuelle'] + $stk3['quantiteActuelle'] )>= $qty){
            }else{
                return response()->json(['fail' =>true,'errors' =>[['Stock inssuffisant. Veuillez vérifiez le stock avant d\' effectuer cette commande']]]);
            }    
        }  
        
        
        $cme -> montantCommande= $request['montantFacture'];
//        $cme -> nomTel= ($request['client']['label'])? $request['client']['label'] :$request['client'] ;
        $cme -> nomTel= $request['client'] ;
        $cme -> save();
        
        foreach($commande as $item){
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
            $av = new ArticleCommande();
            $av -> quantite = $qty;
            $av -> prixUnitaire =$item['prixU'] ;
            $av -> type_id = $item['article']['id'];
            $av -> commande_id = $cme -> id;
            $av -> magasin_id = $lieu;
            $av -> save() ; 
        }
        
        foreach($cme -> types as $value)
            $value -> article;
        
        return $cme;
    }
    
    public function deleteCommande(Request $request){
        $valide = Validator::make($request->all(), [
          'id' => 'required',
        ]);
        if ($valide->fails()) {
          return response()->json([
            'fail' =>true,
            'errors' => $valide->errors()
          ]);
        }
        $commande = Commande::find($request['id']);
        $commande -> types() -> detach();
        $commande -> delete();
        
        return $commande;
    }
    
    public function commandeVente(Request $request){
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
//          'id' => 'required|integer',
        ]);
        if ($valide->fails()) {
          return response()->json([
            'fail' =>true,
            'errors' => $valide->errors()
          ]);
        }
//        dd('');
        
        
        //identifiant de la veente
        $timestamp = strtotime(now());
        $day = date('d', $timestamp);
        $month = date('m', $timestamp);
        $year = date('y', $timestamp);
        $results = Vente::latest('id')->first();
        $results = 'Vte/'.$day.'/'.$month.'/'.$year.'/n'.(($results)?$results['id']+1:1);
        $qty = 0;
        $lieu = 0;
//        $variation = ($client['sommeRestante'] > 0)? - $client['sommeRestante']:$client['sommeRestante'];
//        $soldeActuel = ($client['sommeRestante'] > 0)? - $client['sommeRestante']:$client['sommeRestante'];
        
        $net =($request['remise'])? $request['montantFacture'] - $request['remise'] : $request['montantFacture'] ;
        $prixT =$request['montantFacture'];
        $restante =$request['sommeRestante'];
        $remise =($request['remise'])? $request['remise'] : 0;
        $versee =$request['sommeVersee'];
        $cl = 0;
        $donnee = [];
        
        
        
        
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
//            $stk      = Stock::where('type_id',$item['article']['id']) -> where('magasin_id',$lieu) -> where('vente_id',$request['id'])-> latest('id')->first();
            $stkPrime = Stock::where('type_id',$item['article']['id']) -> where('magasin_id',$lieu) -> latest('id')->first();
            if( $stkPrime['quantiteActuelle'] >= $qty){
            }else{
                return response()->json(['fail' =>true,'errors' =>[['Stock inssuffisant. Veuillez vérifiez le stock avant d\' effectuer cette vente']]]);
            }    
        } 
        
        
//        interaction avec le compte client
//        le client existe dans la base de donnees
        if($request['client'] > 0){
            $cli = Client::find($request['client']);
            $cpt = Compte::where('client_id',$cli->id)->latest('id')->first();
            $compte= new Compte();
            $compte -> soldeAnterieur = $cpt['soldeActuel'];
            $compte -> soldeActuel = $cpt['soldeActuel'] - $request['sommeRestante'];
            $compte -> variation = $request['sommeRestante'];
            $compte -> client_id = $cli -> id ;
            $compte -> save();    
        }
        //le client n existe pas dans la base de donnees et n a pas de compte
        else{
            $var =explode(" ",$request['client']); 
            
            //creation d un nouveai client et de son compte
            $client = new Client();
            $client -> nomClient = $var[0] .' '.$var[1];
            $client -> telephoneClient = $var['2'];
            $client -> save();
            
            $compte = new Compte();
            $compte -> soldeAnterieur = 0 ;
            $compte -> variation =$request['sommeRestante'];
            $compte -> soldeActuel =$request['sommeVersee'] + $request['remise'] - $request['montantFacture'];
            $compte -> client_id = $client -> id;
            $compte -> save() ;
        }
        $cl =($request['client'] > 0)? $request['client'] : $client -> id;
        
        
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
        $vv -> client -> compte ;
        foreach($vv -> articles as $k => $val){
            $val -> article ;
            $donnee[$val['pivot']['magasin_id']][$k] =$val ; 
        }
        if($request['bon'])
            $vv['bon'] = $donnee;
        
        
        
//    $pdf = \PDF::loadView('etats.venteFacture',['data'=>$vv,'trad'=>$f->format($vv['prixTotal'])]);
//    $pdf->save(storage_path().'_filename.pdf');
//    return $pdf->download($results.'.pdf');
        
            $pdf = \PDF::loadView('etats.venteFacture',['data'=>$vv,'trad'=>$f->format($vv['prixTotal'])]);
    $pdf->save(storage_path().'_filename.pdf');
        
    return $pdf->download($results.'.pdf');
        
//        return $vv;
        
    }
    
}
