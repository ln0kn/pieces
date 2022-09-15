<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;
use App\Ajustement;
use App\Stock;
class AjustementController extends Controller
{
    
    
    public function addAjustement(Request $request){
        $valide = Validator::make($request->all(), [
          'id' => 'required|integer',
          'article' => 'required',
          'magasin_id' => 'required|integer',
          'quantiteActuelle' => 'required|integer',
          'quantitePhysique' => 'required|integer',
          'magasin_id' => 'required|integer',
        ]);
        if ($valide->fails()) {
          return response()->json([
            'fail' =>true,
            'errors' => $valide->errors()
          ]);
        }
        
        //identifiant de l ajustement
        $timestamp = strtotime(now());
        $day = date('d', $timestamp);
        $month = date('m', $timestamp);
        $year = date('y', $timestamp);
        $results = Ajustement::latest('id')->first();
        $results = 'Ajst/'.$day.'/'.$month.'/'.$year.'/n°'.(($results)?$results['id']+1:1);
        
        $ajst = new Ajustement();
        $ajst -> reference = $results;
        $ajst -> type_id = $request['id'];
        $ajst -> magasin_id = $request['magasin_id'];
        $ajst -> quantiteNumerique = $request['quantiteActuelle'];
        $ajst -> quantitePhysique = $request['quantitePhysique'];
        $ajst -> save();
        
        
        $stock = new Stock();
        $stock -> quantiteAnterieure = $request['quantiteActuelle'];
        $stock -> variation = ($request['quantiteActuel'] > $request['quantitePhysique'])? $request['quantiteActuel'] -  $request['quantitePhysique']: $request['quantitePhysique'] - $request['quantiteActuel'];
        $stock -> quantiteActuelle = $request['quantitePhysique'];
        $stock -> type_id = $request['id'];
        $stock -> magasin_id= $request['magasin_id'];
        $stock -> save();
        
        
        $ajst -> type -> article  ;
        $ajst -> mag ;
        
        return $ajst;
    }
    
    public function getAjustement(Request $request){
        return Ajustement::with('type.article') -> with('mag')-> get();
    }
    
}