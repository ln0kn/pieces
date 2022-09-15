<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Stock;
use App\Casse;
use App\CasseType;

class CasseController extends Controller
{
    public function getCasse(){
        return Casse::with('types.article')->get();
    }

    public function addCasse(Request $request){

        $valide= Validator::make($request -> all(), 
        [
            'data.*.magasin.id' => 'required', // a revoir
            'data.*.article.id' => 'required',
            'data.*.quantite' => 'required',
            //'id' => 'required',
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
            $results = Casse::latest('id')->first();        
            $results = 'Cas/'.$day.'-'.$month.'-'.$year.'/n°'.(($results)?$results['id']+1:1);

            $Cas = new Casse();
            $Cas -> refCas = $results;
            $Cas -> save(); 

        foreach($request['data'] as $k => $req){
            $qte = Stock::where('type_id',$req['article']['id']) -> where('magasin_id',$req['magasin']['id']) -> latest('id')->first(); 
            //dd($qte);
            if($qte['quantiteActuelle'] >= $req['quantite']){
               
                $cte = CasseType::where('type_id',$req['article']['id']) -> where('magasin_id',$req['magasin']['id']) -> latest('id')->first();
                //dd($cte);
                if($cte){
                $CasTyp = new CasseType();
                $CasTyp -> casse_id = $Cas -> id;
                $CasTyp -> type_id = $req['article']['id'];
                $CasTyp -> magasin_id = $req['magasin']['id'];
                $CasTyp -> quantiteTotale   = ($cte)? $cte['quantiteTotale'] + $req['quantite']: $req['quantite'];
                $CasTyp -> quantite   =  $req['quantite'];
                $CasTyp -> save(); 
                }
                else{
                    $CasTyp = new CasseType();
                    $CasTyp -> casse_id = $Cas -> id;
                    $CasTyp -> type_id = $req['article']['id'];
                    $CasTyp -> magasin_id = $req['magasin']['id'];
                    $CasTyp -> quantiteTotale   =  $req['quantite'];
                    $CasTyp -> quantite   =  $req['quantite'];
                    $CasTyp -> save(); 
                }
            //Soustraire stock
                $stock = new Stock ();
                $stock -> quantiteAnterieure = ($qte) ? $qte['quantiteActuelle']:0;
                $stock -> quantiteActuelle = ($qte) ? $qte['quantiteActuelle'] - $req['quantite']:0;
                $stock -> variation = $stock['quantiteActuelle']-$stock['quantiteAnterieure'];
                $stock -> type_id = $req['article']['id'];
                $stock -> magasin_id = $req['magasin']['id'];
                $stock -> casse_id = $Cas -> id;
                $stock -> save();
            
            }
            else{
                return response() -> json(['fail' => true, 'errors' => [['Opération impossible: vérifiez le stock!']] ]);  
            }    
        }
      return $Cas;
    }

    public function deleteCasse(Request $request) {
        $valide = Validator::make($request -> all(),
        [
         'id' => 'required',
        ]);
        if($valide -> fails()) {
            return response() -> json([
            'fail'=> true,
            'errors' => $valide -> errors()]);
        }

       $qte = Stock::where('type_id',$request['types'][0]['pivot']['type_id']) -> where('magasin_id',$request['types'][0]['pivot']['magasin_id']) -> latest('id')->first(); 
       if($request['id'] == $qte['casse_id']){
        $Cas= Casse::find($request['id']);
        $Cas -> types() -> detach();
        $Cas -> stocks()-> delete();
        $Cas -> delete(); 
        return $Cas;
       }
       else{
        return response() -> json(['fail' => true, 'errors' => [['Vous ne pouvez pas supprimer cette casse !']] ]);     
       }
    } 

    public function editCasse(Request $request){
      
        $valide= Validator::make($request -> all(),
        [
         '*id' => 'required',
        ]);

        if($valide -> fails()) {
            return response() -> json([
            'fail'=> true,
            'errors' => $valide -> errors()]);
        }

        //
        $Ct = CasseType:: where('casse_id',$request['data'][0]['id'])->get();
       
        $tb = array ();
        foreach ($request['data'] as $key => $req) {
            foreach ($Ct as $k => $ct) {
                
                if ($req['magasin']['id']==$ct['magasin_id'] && $req['article']['id']==$ct['type_id']) {
                    $tb[]=$ct['id'] ;     
                }
                
            }
        }
        if($tb){
            $ss= CasseType::whereNotIn('id',$tb)->where('casse_id',$request['data'][0]['id'])->get();
            
            foreach ($ss as $key => $value) {
                $magasin=$value['magasin_id'];$type=$value['type_id']; $cas_id=$value['casse_id'];
                $cs=Stock::where('magasin_id',$magasin)->where('type_id',$type)->where('casse_id',$cas_id);
                $cs->delete();
                $value->delete();
            }
        }
        else{
            $At = CasseType:: where('casse_id',$request['data'][0]['id'])->get();
            foreach ($At as $key => $value) {
                $magasin=$value['magasin_id'];$type=$value['type_id']; $cas_id=$value['casse_id'];
                $cs=Stock::where('magasin_id',$magasin)->where('type_id',$type)->where('casse_id',$cas_id);
                $cs->delete();
                $value->delete();
            }   
        }
        //

       $Cas = Casse::find($request['data'][0]['id']);
    
        foreach($request['data'] as $k => $req){
           $last= CasseType::where('type_id',$req['article']['id']) -> where('magasin_id',$req['magasin']['id'])->latest('id')->first();
           //dd($last['casse_id']);
           $qte = Stock::where('type_id',$req['article']['id']) -> where('magasin_id',$req['magasin']['id']) -> latest('id')->first(); 
           $act = $qte['quantiteActuelle']; $qt=$req['quantite'];
            if(($qte['transfert_id']  &&  $qte['vente_id']  &&  $qte['approvisionnement_id']) || ($last['casse_id'] > $request['data'][0]['id']) ){
                return response() -> json(['fail' => true, 'errors' => [['Vous ne pouvez pas modifier cette casse!']] ]);  
            } 
           
            else if( $act >= $qt){
                
                $CasTyp = CasseType::where('type_id',$req['article']['id']) -> where('magasin_id',$req['magasin']['id'])->latest('id') ->first();
                if($CasTyp){
                    $CasTyp -> casse_id= $Cas->id;
                    $CasTyp -> type_id = $req['article']['id'];
                    $CasTyp -> magasin_id = $req['magasin']['id'];
                    $CasTyp -> quantiteTotale   = $CasTyp['quantiteTotale'] - $CasTyp['quantite'] + $req['quantite'];
                    $CasTyp -> quantite   =  $req['quantite'];
                    $CasTyp -> save(); 
                    
                    //Soustraire stock
                    $stock = Stock:: where('type_id',$req['article']['id']) -> where('magasin_id',$req['magasin']['id'])->latest('id') ->first();
                    $stock -> quantiteActuelle = ($stock) ? $stock['quantiteAnterieure']-$req['quantite']:$req['quantite'];
                    $stock -> quantiteAnterieure = ($stock) ? $stock['quantiteAnterieure']:0;
                    $stock -> variation = $stock['quantiteActuelle']-$stock['quantiteAnterieure'];
                    $stock -> type_id = $req['article']['id'];
                    $stock -> magasin_id = $req['magasin']['id'];
                    $stock -> casse_id = $Cas -> id;
                    $stock -> save();
                }
                else {
                    $cte = CasseType::where('type_id',$req['article']['id']) -> where('magasin_id',$req['magasin']['id']) -> latest('id')->first();
                    $CasTyp = new CasseType();
                    $CasTyp -> casse_id = $Cas -> id;
                    $CasTyp -> type_id = $req['article']['id'];
                    $CasTyp -> magasin_id = $req['magasin']['id'];
                    $CasTyp -> quantiteTotale   = ($cte)? $cte['quantiteTotale'] + $req['quantite']: $req['quantite'];
                    $CasTyp -> quantite   =  $req['quantite'];
                    $CasTyp -> save(); 

                    $stock = new Stock ();
                    $stock -> quantiteAnterieure = ($qte) ? $qte['quantiteActuelle']:0;
                    $stock -> quantiteActuelle = ($qte) ? $qte['quantiteActuelle'] - $req['quantite']:0;
                    $stock -> variation = $stock['quantiteActuelle']-$stock['quantiteAnterieure'];
                    $stock -> type_id = $req['article']['id'];
                    $stock -> magasin_id = $req['magasin']['id'];
                    $stock -> casse_id = $Cas -> id;
                    $stock -> save();
                }
            }
                
            else{     
                return response() -> json(['fail' => true, 'errors' => [['Opération impossible: vérifiez votre stock!']] ]);      
            } 
            
        }
    return $Cas;
    }
    
}
