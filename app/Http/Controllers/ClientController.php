<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Client;
use App\Compte;

class ClientController extends Controller
{
    public function getClient(){        
        return Client::with('compte')->orderBy('id', 'desc')->get();
    }

    public function addClient(Request $request){
        $valide= Validator::make($request -> all(),
        [
         'nomClient' => 'required', // a revoir
         'telClient' => 'required|digits:8|unique:clients,telephoneClient', // a revoir
         'solde' => 'required|integer', // a revoir
        //'id' => 'required',
        ]);
        if($valide -> fails()) {
            return response() -> json([
            'fail'=> true,
            'errors' => $valide -> errors()]);
        }
       
        $Client = new Client ();
        $Client -> nomClient = $request['nomClient'];
        $Client -> telephoneClient = $request['telClient'];
        $Client -> save ();

        //Creer compte
         $compte = new Compte();
         $compte -> client_id= $Client->id;
         $compte -> soldeActuel = $request['solde'];
         $compte -> soldeAnterieur =0 ;
         $compte -> variation = $compte['soldeActuel']-$compte['soldeAnterieur'];
         $compte -> save();
         $Client -> compte;
        return $Client; 
    }

    public function editClient(Request $request){
        $valide= Validator::make($request -> all(),
        [
            'nomClient' => 'required', // a revoir
            'telClient' => 'required', // a revoir
            'solde' => 'required',
        ]);

        if($valide -> fails()) {
            return response() -> json([
            'fail'=> true,
            'errors' => $valide -> errors()]);
        }
        
        $client = Client::find($request['id']);
        $client -> nomClient = $request['nomClient'];
        $client -> telephoneClient = $request['telClient'];
        $client -> save ();
       

        $compte= Compte::where('client_id',$request['id'])->first();
        //dd($compte['soldeActuel']);
        $compte -> soldeActuel = $request['solde'];
        $compte -> soldeAnterieur =0 ;
        $compte -> variation = $compte['soldeActuel']-$compte['soldeAnterieur'];
        $compte -> save();
        $client -> compte;
        return $client;
    }

    public function deleteClient(Request $request){
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
    
        $client= Client::find($request['id']);
        $client -> compte() ->delete();
        $client -> delete();
        return $client; 
    }
}
