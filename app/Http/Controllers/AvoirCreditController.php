<?php

namespace App\Http\Controllers;
use App\AvoirCredit;
use Illuminate\Http\Request;
use Validator;
use App\Compte;
//use App\Versement;
class AvoirCreditController extends Controller
{
    public function getVersement(){
        return AvoirCredit::with('compte.client')->orderBy('id', 'desc')->get();
    }
    
    public function addVersement(Request $request){
        $valide = Validator::make($request->all(), [
          'client.id' => 'required|integer',
          'sommeVersee' => 'required|integer',
        ]);
        if ($valide->fails()) {
          return response()->json([
            'fail' =>true,
            'errors' => $valide->errors()
          ]);
        }
        
        $cpt = Compte::where('client_id',$request['client']['id'])->latest('id')->first();
       
        $solde = $cpt['soldeActuel'] + $request['sommeVersee'];
        $compte= new Compte();
        $compte -> soldeAnterieur = $cpt['soldeActuel'] ;
        $compte -> soldeActuel = $solde;
        $compte -> variation = $request['sommeVersee'];
        $compte -> client_id = $request['client']['id'];
        $compte -> save();
        
        $av                = new AvoirCredit();
        $av -> sommeVersee = $request['sommeVersee'];
        $av -> soldeClient = $solde;
        $av -> compte_id   = $compte -> id;
        $av -> save(); 
        
        $av -> compte->client ; 
        
        return $av;
    }
    
    public function editVersement(Request $request){
    
        $valide = Validator::make($request->all(), [
          'id' => 'required|integer',
          'client.id' => 'required|integer',
          'sommeVersee' => 'required|integer',
        ]);
        if ($valide->fails()) {
          return response()->json([
            'fail' =>true,
            'errors' => $valide->errors()
          ]);
        }
        
        $compte = Compte::where('client_id',$request['client']['id'])->latest('id')->first();
        $compte -> avoir()->delete ();
        
//        dd(' ');
        
        $solde = $compte['soldeAnterieur'] + $request['sommeVersee'];
        $compte -> soldeAnterieur = $compte['soldeAnterieur'] ;
        $compte -> soldeActuel = $solde;
        $compte -> variation = $request['sommeVersee'];
        $compte -> client_id = $request['client']['id'];
        $compte -> save();
        
        
        $av                = new AvoirCredit();
        $av -> sommeVersee = $request['sommeVersee'];
        $av -> soldeClient = $solde;
        $av -> compte_id   = $compte -> id;
        $av -> save(); 
        
        $av -> compte->client ; 
        return $av;
    }
    
    public function deleteVersement(Request $request){
        $valide = Validator::make($request->all(), [
          'id' => 'required|integer',
        ]);
        if ($valide->fails()) {
          return response()->json([
            'fail' =>true,
            'errors' => $valide->errors()
          ]);
        }
        $tab ;
        
        $cpte = Compte::where('client_id',$request['id'])->latest('id')->first();
        $solde = $cpte['soldeActuel'] - $cpte['variation'];
//        $varia = $cpte['variation'];
        
        $compte = new Compte();
        $compte -> soldeAnterieur =  $cpte['soldeActuel'];
        $compte -> soldeActuel    =  $cpte['soldeAnterieur'];
        $compte -> variation      =  $cpte['variation'];;
        $compte -> client_id      =  $request['id'] ;
        $compte -> save();
        
        
        $avoir2 = AvoirCredit::where('compte_id',$cpte['id'])-> get();
//        $tab =$avoir;
        
        
        $avoir = AvoirCredit::where('compte_id',$cpte['id']) -> delete();
//        $avoir = AvoirCredit::find($cpte['id'],'compte_id');
//        dd($avoir);
//        dd($cpte['id']);
        
        
//        $avoir -> delete();
        
//        
//        dd($avoir);
//        $av                = new AvoirCredit();
//        $av -> sommeVersee = $avoir['sommeVersee'];
//        
//        $av -> soldeClient = $avoir['soldeClient'] - $avoir['sommeVersee'];
//        $avoir -> detach();
//        $cpte -> delete();
//        $av -> compte_id   = $compte -> id;
//        $av -> save(); 
//        
        
        
        
        return $avoir2;
    }
    
}
