<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Response;
use App\Transfert;
use App\TransfertType;
use App\Stock;


class TransfertController extends Controller
{
    public function addTransfert(Request $request){
       
        $valide= Validator::make($request -> all(),
        
        [
            'data.*.magasinDepart' => 'required', // a revoir
            'data.*.magasinArrive' => 'required',
            'data.*.quantite' => 'required',
            'data.*.article' => 'required',
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
        $results = Transfert::latest('id')->first();        
        $results = 'Transf/'.$day.'-'.$month.'-'.$year.'/n°'.(($results)?$results['id']+1:1);
        
       

        foreach($request['data'] as $k => $req){
            $qteDep = Stock::where('type_id',$req['article']['id']) -> where('magasin_id',$req['magasinDepart']['id']) -> latest('id')->first();
            $qteArr = Stock::where('type_id',$req['article']['id']) -> where('magasin_id',$req['magasinArrive']['id']) -> latest('id')->first(); 
         
            if( $qteDep != null && $qteDep['quantiteActuelle'] >= $req['quantite']){
                 $Trans = new transfert();
                 $Trans -> refTrans = $results;
                 $Trans -> save();
                
                $Tt = new TransfertType();
                $Tt -> quantite= $req['quantite'];
                $Tt -> magasinDepart = $req['magasinDepart']['id'];
                $Tt -> magasinArrive = $req['magasinArrive']['id'];
                $Tt -> transfert_id  = $Trans -> id;
                $Tt -> type_id   = $req['article']['id'];
                $Tt -> save(); 
            
             //Ajouter stock
                $stockA = new Stock ();
                $stockA -> quantiteAnterieure = ($qteArr) ? $qteArr['quantiteActuelle']:0;
                $stockA -> quantiteActuelle = ($qteArr) ? $qteArr['quantiteActuelle'] + $req['quantite']: $req['quantite'];
                $stockA -> type_id = $req['article']['id'];
                $stockA -> magasin_id = $req['magasinArrive']['id'];
                $stockA -> variation= $stockA['quantiteActuelle'] - $stockA['quantiteAnterieure'];
                $stockA -> transfert_id = $Trans -> id;
                $stockA -> save();
                $stockD = new Stock ();
                $stockD -> quantiteActuelle =  $qteDep['quantiteActuelle'] - $req['quantite'];
                $stockD -> quantiteAnterieure =  $qteDep['quantiteActuelle'];
                $stockD -> type_id = $req['article']['id'];
                $stockD -> magasin_id = $req['magasinDepart']['id'];
                $stockD -> variation= $stockD['quantiteActuelle'] - $stockD['quantiteAnterieure'];
                $stockD -> transfert_id = $Trans -> id;
                $stockD -> save();
            }
            else{
                $Trans=Transfert::find($request['data'][0]['id']);
//                $Trans->delete();
                return response() -> json(['fail' => true, 'errors' => [['Veuillez vous approvisionner d"abord  ']] ]);  
            }
        }
      return $Trans;
    }

    public function getTransfert(){
        return Transfert::with('types.article')->get();  
    }

    public function deleteTransfert(Request $request) {
        //dd($request);
        $valide = Validator::make($request -> all(),
        [
         'id' => 'required',
        ]);
        if($valide -> fails()) {
            return response() -> json([
            'fail'=> true,
            'errors' => $valide -> errors()]);
        }
     //dd($request);
        $qteD = Stock::where('type_id',$request['types'][0]['pivot']['type_id']) -> where('magasin_id',$request['types'][0]['pivot']['magasinDepart']) -> latest('id')->first(); 
        $qteA = Stock::where('type_id',$request['types'][0]['pivot']['type_id']) -> where('magasin_id',$request['types'][0]['pivot']['magasinArrive']) -> latest('id')->first(); 
        if($request['id'] == $qteD['transfert_id'] && $request['id'] == $qteA['transfert_id'] ){
        $Trans= Transfert::find($request['id']);
        $Trans -> types() -> detach();
        $Trans -> stocks()-> delete();
        $Trans -> delete(); 
        return $Trans;
       }
       else{
        return response() -> json(['fail' => true, 'errors' => [['Vous ne pouvez pas supprimer ce transfert !']] ]);     
       }
    }

    public function editTransfert(Request $request){
        
        $valide= Validator::make($request -> all(),
        [
         '*id' => 'required',
        ]);

        if($valide -> fails()) {
            return response() -> json([
            'fail'=> true,
            'errors' => $valide -> errors()]);
        }
        
        // Nettoyage des tables Stock et TransfertType 
        $Tt = TransfertType:: where('transfert_id',$request['data'][0]['id'])->get();
       
        $tb = array ();
        foreach ($request['data'] as $key => $req) {
            foreach ($Tt as $k => $Tt) {
                
                if ($req['magasinDepart']['id']==$Tt['magasinDepart'] && $req['magasinArrive']['id']==$Tt['magasinArrive'] && $req['article']['id']==$Tt['type_id']) {
                    $tb[]=$Tt['id'] ;     
                }
                
            }
        }
        if($tb){
            $ss= TransfertType::whereNotIn('id',$tb)->where('transfert_id',$request['data'][0]['id'])->get();
            
            foreach ($ss as $key => $value) {
                $magasinDep=$value['magasinDepart']['id'];$magasinArr=$value['magasinArr']['id']; $type=$value['type_id']; $tt_id=$value['transfert_id'];
                $Sdp=Stock::where('magasin_id',$magasinDep)->where('type_id',$type)->where('transfert_id',$tt_id);
                $Sda=Stock::where('magasin_id',$magasinArr)->where('type_id',$type)->where('transfert_id',$tt_id);
                $Sdp->delete(); $Sda->delete();
                $value->delete();
            }
        }
        else{
            $Tt = TransfertType:: where('Transfert_id',$request['Tta'][0]['id'])->get();
            foreach ($Tt as $key => $value) {
                $magasinDep=$value['magasinDepart']['id'];$magasinArr=$value['magasinArr']['id']; $type=$value['type_id']; $tt_id=$value['transfert_id'];
                $Sdp=Stock::where('magasin_id',$magasinDep)->where('type_id',$type)->where('transfert_id',$tt_id);
                $Sda=Stock::where('magasin_id',$magasinArr)->where('type_id',$type)->where('transfert_id',$tt_id);
                $Sdp->delete(); $Sda->delete();
                $value->delete();
            }   
        }
       //
       
        $Trans = Transfert::find($request['data'][0]['id']);
       
        foreach($request['data'] as $k => $req){
          
            $qtD = Stock::where('type_id',$req['article']['id']) -> where('magasin_id',$req['magasinDepart']['id']) -> latest('id')->first(); 
            $qtA = Stock::where('type_id',$req['article']['id']) -> where('magasin_id',$req['magasinArrive']['id']) -> latest('id')->first(); 
           
           
            if($qtD['casse_id']  &&  $qtD['vente_id']  &&  $qtD['approvisionnement_id'] && $qtA['casse_id']  &&  $qtA['vente_id']  &&  $qtA['approvisionnement_id'] ){
                return response() -> json(['fail' => true, 'errors' => [['Vous ne pouvez pas modifier ce transfert!']] ]);  
            }
            else if ($qtD['quantiteActuelle'] >= $req['quantite']){
                
                $TransType = TransfertType:: where('type_id',$req['article']['id']) -> where('magasinDepart',$req['magasinDepart']['id'])-> where('magasinArrive',$req['magasinArrive']['id'])->latest('id') ->first();
                if ($TransType) {
                    $TransType -> quantite= $req['quantite'];
                    $TransType -> magasinDepart = $req['magasinDepart']['id'];
                    $TransType -> magasinArrive = $req['magasinArrive']['id'];
                    $TransType -> transfert_id  = $Trans-> id;
                    $TransType -> type_id   = $req['article']['id'];
                    $TransType -> save(); 
                
                    //Ajouter stock                   
                    $stockA  = Stock::where('type_id',$req['article']['id']) -> where('magasin_id',$req['magasinArrive']['id'])->latest('id') ->first();

                    $stockA -> quantiteActuelle = ($stockA) ? $stockA['quantiteAnterieure'] + $req['quantite']: $req['quantite'];
                    $stockA -> quantiteAnterieure = 0;
                    $stockA -> type_id = $req['article']['id'];
                    $stockA -> magasin_id = $req['magasinArrive']['id'];
                    $stockA -> variation= $req['quantite'];     
                    $stockA -> transfert_id = $Trans-> id ;
                    $stockA -> save();

                    $stockD = Stock::where('type_id',$req['article']['id']) -> where('magasin_id',$req['magasinDepart']['id']) -> latest('id')->first();

                    $stockD -> quantiteActuelle =  $stockD['quantiteAnterieure']-$req['quantite'];
                    $stockD -> quantiteAnterieure =  $stockD['quantiteActuelle']+$req['quantite'];
                    $stockD -> type_id = $req['article']['id'];
                    $stockD -> magasin_id = $req['magasinDepart']['id'];
                    $stockD -> variation= $stockD['quantiteActuelle'] - $stockD['quantiteAnterieure'];
                    $stockD -> transfert_id = $Trans-> id ;
                    $stockD -> save();
                }
                else {
                    $qteDep = Stock::where('type_id',$req['article']['id']) -> where('magasin_id',$req['magasinDepart']['id']) -> latest('id')->first();
                    $qteArr = Stock::where('type_id',$req['article']['id']) -> where('magasin_id',$req['magasinArrive']['id']) -> latest('id')->first(); 

                    $Tt = new TransfertType();
                    $Tt -> quantite= $req['quantite'];
                    $Tt -> magasinDepart = $req['magasinDepart']['id'];
                    $Tt -> magasinArrive = $req['magasinArrive']['id'];
                    $Tt -> transfert_id  = $Trans -> id;
                    $Tt -> type_id   = $req['article']['id'];
                    $Tt -> save(); 
                
                //Ajouter stock
                    $stockA = new Stock ();
                    $stockA -> quantiteAnterieure = ($qteArr) ? $qteArr['quantiteActuelle']:0;
                    $stockA -> quantiteActuelle = ($qteArr) ? $qteArr['quantiteActuelle'] + $req['quantite']: $req['quantite'];
                    $stockA -> type_id = $req['article']['id'];
                    $stockA -> magasin_id = $req['magasinArrive']['id'];
                    $stockA -> variation= $stockA['quantiteActuelle'] - $stockA['quantiteAnterieure'];
                    $stockA -> transfert_id = $Trans -> id;
                    $stockA -> save();
                    $stockD = new Stock ();
                    $stockD -> quantiteActuelle =  $qteDep['quantiteActuelle'] - $req['quantite'];
                    $stockD -> quantiteAnterieure =  $qteDep['quantiteActuelle'];
                    $stockD -> type_id = $req['article']['id'];
                    $stockD -> magasin_id = $req['magasinDepart']['id'];
                    $stockD -> variation= $stockD['quantiteActuelle'] - $stockD['quantiteAnterieure'];
                    $stockD -> transfert_id = $Trans -> id;
                    $stockD -> save();   
                }
           
            }
            else {
                return response() -> json(['fail' => true, 'errors' => [['Opération impossible:Vérifiez les quantités ! ']] ]); 
            }
        }   
        
    }
}
