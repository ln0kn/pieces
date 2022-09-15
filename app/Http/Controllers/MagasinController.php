<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent;
use Illuminate\Support\Facades\Validator;
use App\Magasin;
use JWTAuth;
class MagasinController extends Controller{
    
    
      public function __construct()
     {
        $this->user = JWTAuth::parseToken()->authenticate();
//        $this->middleware('auth.jwt');
        $this->middleware('droit');
     }
    
    public function addMagasin(Request $request){
        $valide = Validator::make($request->all(), [
          'libelle' => 'required|unique:magasins,libelle',
        ]);
        if ($valide->fails()) {
          return response()->json([
            'fail' =>true,
            'errors' => $valide->errors()
          ]);
        }
        
        $Mag = new Magasin ();
        $Mag -> libelle = $request['libelle'];
        $Mag -> save ();
    
        return $Mag;
    }

    public function getMagasin(){
        
//        $user = JWTAuth::parseToken()->toUser();
        
//        if(! $user = JWTAuth::parseToken()->authenticate()){
//            return response()->json(['message' => 'User not Found'],404);   
//        }
        return Magasin::orderBy('id', 'desc')->get();
    }

    public function deleteMagasin(Request $request){
        //dd($request['id']);
        $valide = Validator::make($request -> all(),
        [
            'id' => 'required',
        ]);
        if($valide -> fails()) {
            return response() -> json([
            'fail'=> true,
            'errors' => $valide -> errors()]);
        }
    
        $Mag= Magasin::find($request['id']);
        $Mag -> delete();
        return $Mag; 
    }

    public function editMagasin(Request $request){
        $valide = Validator::make($request->all(), [
          'libelle' => 'required|unique:magasins,libelle,'.$request['id'].',id',
          'id' => 'required',
        ]);
        if ($valide->fails()) {
          return response()->json([
            'fail' =>true,
            'errors' => $valide->errors()
          ]);
        }
        
        $Mag = Magasin::find($request['id']);
        $Mag -> libelle = $request['libelle'];
        $Mag -> save ();
        return $Mag;
    }
}
