<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent;
use Illuminate\Support\Facades\Validator;
use App\Depense;

class DepenseController extends Controller
{
    public function getDepense(){
        return Depense::orderBy('id', 'desc')->get();
    }

    public function addDepense(Request $request){
        //dd($request['data']);
        $valide= Validator::make($request -> all(),
        [
         'data.montant' => 'required|integer',
         'data.motif' => 'required',
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
            $results = Depense::latest('id')->first();        
            $results = 'Ref/'.$day.'-'.$month.'-'.$year.'/n°'.(($results)?$results['id']+1:1);

        $Dep = new Depense ();
        $Dep -> ref = $results;
        $Dep -> montant = $request['data']['montant'];
        $Dep -> motif = $request['data']['motif'];
        $Dep -> save ();
    
        return $Dep;
        }

        public function deleteDepense(Request $request){
           // dd($request['id']);
            $valide = Validator::make($request -> all(),
            [
             'id' => 'required',
            ]);
            if($valide -> fails()) {
                return response() -> json([
                'fail'=> true,
                'errors' => $valide -> errors()]);
            }
       
            $Dep= Depense::find($request['id']);
            $Dep -> delete();
            return $Dep; 
        }

        public function editDepense(Request $request){
            $valide= Validator::make($request -> all(),
            [
                'montant' => 'required|integer',
                'motif' => 'required',
                'id' => 'required',
            ]);
    
            if($valide -> fails()) {
                return response() -> json([
                'fail'=> true,
                'errors' => $valide -> errors()]);
            }
            
            $Dep = Depense::find($request['id']);
            $Dep -> montant = $request['montant'];
            $Dep -> motif = $request['motif'];
            $Dep -> save ();
            return $Dep;
     }
}
