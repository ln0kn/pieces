<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Response;

use App\Magasin;
use App\Article;
use App\Stock;
use App\Type;
use App\ApprovisionnementType;
use App\Approvisionnement;
use Illuminate\Database\Schema\ForeignKeyDefinition;
use JWTAuth;
class ApprovisionnementController extends Controller
{
    public function __construct()
     {
        $this->user = JWTAuth::parseToken()->authenticate();
        $this->middleware('droit');
     }
    
    public function getMagasin(){
        return Magasin::all();
    }

    public function getApprovisionnement(){

       return Approvisionnement::orderBy('id','desc') -> with('types.article')->get();
    }

    public function addApprovisionnement(Request $request){
        $valide= Validator::make($request -> all(), 
        [
            'data.*.magasin.id' => 'required|integer',
            'data.*.article.id' => 'required|integer',
            'data.*.quantite' => 'required|integer',
        ]);
        if($valide -> fails()) {
            return response() -> json([
            'fail'=> true,
            'errors' => $valide -> errors()]);
        }
        
        $timestamp = strtotime(now());
        $day = date('d', $timestamp);
        $month = date('m', $timestamp);
        $year = date('y', $timestamp);
        $results = Approvisionnement::latest('id')->first();        
        $results = 'App/'.$day.'-'.$month.'-'.$year.'/n°'.(($results)?$results['id']+1:1);

        
        $App = new Approvisionnement();
        $App -> identifiant = $results;
        $App -> save(); 
        
        foreach($request['data'] as $k => $req){
            $AppArt = new ApprovisionnementType();

            $AppArt -> approvisionnement_id= $App->id;
            $AppArt -> type_id = $req['article']['id'];
            $AppArt -> magasin_id = $req['magasin']['id'];
            $AppArt -> quantite   = $req['quantite'];
            $AppArt -> save(); 
        
            //Ajouter stock
            $qte = Stock::where('type_id',$req['article']['id']) -> where('magasin_id',$req['magasin']['id']) -> latest('id')->first(); 
            $stock = new Stock ();
            $stock -> quantiteAnterieure = ($qte) ? $qte['quantiteActuelle']:0;     
            $stock -> quantiteActuelle = ($qte) ? $qte['quantiteActuelle'] + $req['quantite']: $req['quantite'];
            $stock -> variation = $stock['quantiteActuelle']-$stock['quantiteAnterieure'];  
            $stock -> type_id = $req['article']['id'];
            $stock -> magasin_id = $req['magasin']['id'];
            $stock -> approvisionnement_id = $App -> id;
            $stock -> save();
        }
       foreach($App -> types as $item){
            $item  -> article;
        }
      return $App;
    }

    public function deleteApprovisionnement(Request $request) {
        $valide = Validator::make($request -> all(),
        [
         'id' => 'required',
        ]);
        if($valide -> fails()) {
            return response() -> json([
            'fail'=> true,
            'errors' => $valide -> errors()]);
        }
        

        $qte = Stock::where('type_id',$request['types'][0]['article']['id']) -> where('magasin_id',$request['types'][0]['pivot']['magasin_id']) -> latest('id')->first(); 
        if($qte['transfert_id'] || $qte['vente_id'] || $qte['casse_id']){
           // afficher l'erreur 
           return response() -> json(['fail' => true, 'errors' => [['Suppression impossible !']] ]); 
        }
        else{
        $App= Approvisionnement::find($request['id']);
        $App -> types() -> detach();
        $App -> stocks() -> delete();
        $App -> delete();
        return $App;
        }
        
    } 

    public function editApprovisionnement(Request $request){
        
        $valide= Validator::make($request -> all(), 
        [
            'data.*.magasin.id' => 'required|integer',
            'data.*.article.id' => 'required|integer',
            'data.*.quantite' => 'required|integer',
        ]);
        if($valide -> fails()) {
            return response() -> json([
            'fail'=> true,
            'errors' => $valide -> errors()]);
        }
        
        $Apt = ApprovisionnementType:: where('approvisionnement_id',$request['data'][0]['id'])->get();
       
        $tb = array ();
        foreach ($request['data'] as $key => $req) {
            foreach ($Apt as $k => $apt) {
                
                if ($req['magasin']['id']==$apt['magasin_id'] && $req['article']['id']==$apt['type_id']) {
                    $tb[]=$apt['id'] ;     
                }
                
            }
        }
        if($tb){
            $ss= ApprovisionnementType::whereNotIn('id',$tb)->where('approvisionnement_id',$request['data'][0]['id'])->get();
            
            foreach ($ss as $key => $value) {
                $magasin=$value['magasin_id'];$type=$value['type_id']; $app_id=$value['approvisionnement_id'];
                $cs=Stock::where('magasin_id',$magasin)->where('type_id',$type)->where('approvisionnement_id',$app_id);
                $cs->delete();
                $value->delete();
            }
        }
        else{
            $At = ApprovisionnementType:: where('approvisionnement_id',$request['data'][0]['id'])->get();
            foreach ($At as $key => $value) {
                $magasin=$value['magasin_id'];$type=$value['type_id']; $app_id=$value['approvisionnement_id'];
                $cs=Stock::where('magasin_id',$magasin)->where('type_id',$type)->where('approvisionnement_id',$app_id);
                $cs->delete();
                $value->delete();
            }   
        }
        
        $App= Approvisionnement :: find($request['data'][0]['id']);

        foreach($request['data'] as $k => $req){
            $apt = ApprovisionnementType::where('type_id',$req['article']['id']) -> where('magasin_id',$req['magasin']['id'])->latest('id') ->first();
            $qt = Stock::where('type_id',$req['article']['id']) -> where('magasin_id',$req['magasin']['id']) -> latest('id')->first(); 
           // dd($qt);
            if(($qt['casse_id']  &&  $qt['vente_id']  &&  $qt['transfert_id']) || $qt['approvisionnement_id'] > $request['data'][0]['id'] ){

                return response() -> json(['fail' => true, 'errors' => [['Vous ne pouvez pas modifier cet approvisionnement !']] ]);  
            }
            else{ 
                
                if($apt){
                    $apt -> quantite= $req['quantite'];
                    $apt -> magasin_id = $req['magasin']['id'];
                    $apt -> approvisionnement_id = $App -> id;
                    $apt -> type_id   = $req['article']['id'];
                    $apt -> save(); 
                
                    //Ajouter stock                   
                    $stockA  = Stock::where('type_id',$req['article']['id']) -> where('magasin_id',$req['magasin']['id'])->latest('id') ->first();
                    $stockA -> quantiteActuelle = ($qt) ? $qt['quantiteActuelle'] - $qt['variation'] + $req['quantite']: $req['quantite'];
                    $stockA -> quantiteAnterieure = 0;
                    $stockA -> type_id = $req['article']['id'];
                    $stockA -> magasin_id = $req['magasin']['id'];
                    $stockA -> variation= $req['quantite'];
                    $stockA -> approvisionnement_id = $App -> id;
                    $stockA -> save();
                } 
                else {
                    $AppArt = new ApprovisionnementType();
                    
                    $AppArt -> approvisionnement_id= $App->id;
                    $AppArt -> type_id = $req['article']['id'];
                    $AppArt -> magasin_id = $req['magasin']['id'];
                    $AppArt -> quantite   = $req['quantite'];
                    $AppArt -> save(); 
                
                    //Ajouter stock
                    $qte = Stock::where('type_id',$req['article']['id']) -> where('magasin_id',$req['magasin']['id']) -> latest('id')->first(); 
                    $stock = new Stock ();
                    $stock -> quantiteAnterieure = ($qte) ? $qte['quantiteActuelle']:0;     
                    $stock -> quantiteActuelle = ($qte) ? $qte['quantiteActuelle'] + $req['quantite']: $req['quantite'];
                    $stock -> variation = $stock['quantiteActuelle']-$stock['quantiteAnterieure'];  
                    $stock -> type_id = $req['article']['id'];
                    $stock -> magasin_id = $req['magasin']['id'];
                    $stock -> approvisionnement_id = $App -> id;
                    $stock -> save();
                }
            }

        }   
        foreach($App -> types as $item){
            $item  -> article;
        }
      return $App;
    }
}
