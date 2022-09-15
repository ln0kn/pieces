<?php

namespace App\Http\Controllers;
use App\Emballage;
use Illuminate\Http\Request;
use Validator;
class EmballageController extends Controller
{
    
    public function addEmballage(Request $request){
        $valide = Validator::make($request->all(), [
          'libelle' => 'required|unique:emballages',
        ]);

        if ($valide->fails()) {
          return response()->json([
            'fail' =>true,
            'errors' => $valide->errors()
          ]);
        }
        
        $emballage = new Emballage ();
        $emballage -> libelle = $request['libelle'];
        $emballage -> save();
        return $emballage;
        
    }
    
    public function editEmballage(Request $request){
        $valide = Validator::make($request->all(), [
          'libelle' => 'required|unique:emballages,libelle,id'.$request['id'].',id',
          'id' => 'required',
        ]);

        if ($valide->fails()) {
          return response()->json([
            'fail' =>true,
            'errors' => $valide->errors()
          ]);
        }
        
        $emballage = Emballage::find($request['id']);
        $emballage -> libelle = $request['libelle'];
        $emballage -> save();
        return $emballage; 
    }
    
    public function getEmballage(){
        return Emballage::all();
    }
    
    
    public function deleteEmballage(Request $request){
        $valide = Validator::make($request->all(), [
          'id' => 'required',
        ]);

        if ($valide->fails()) {
          return response()->json([
            'fail' =>true,
            'errors' => $valide->errors()
          ]);
        }
        $emb = Emballage::find($request['id']);
        $emb -> delete();
        return $emb;
    }
    
    
}
