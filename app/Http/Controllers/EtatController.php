<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Vente;
use App\Type;
use Validator;
class EtatController extends Controller
{
    
    public function venteFacture (Request $request){
        $valide = Validator::make($request->all(), [
          'id' => 'required|integer',
        ]);
        if ($valide->fails()) {
          return response()->json([
            'fail' =>true,
            'errors' => $valide->errors()
          ]);
        }
        
        $donnee = [];
        $f = new \NumberFormatter("fr", \NumberFormatter::SPELLOUT);
        $data = Vente::find($_GET['id']);
        $data -> client -> compte ;
        foreach($data -> articles as $k => $val){
            $donnee[$val['pivot']['magasin_id']][$k] =$val ;
            $val -> article ;
        }
            $data['bon'] = $donnee;

    //    $pdf = \PDF::loadView('etats.venteFacture',['data'=>$data,'trad'=>$f->format($data['prixTotal'])]);
    //    $pdf->save(storage_path().'_filename.pdf');
    //    return $pdf->download($data['referenceVente'].'.pdf');


        $pdf = \PDF::loadView('etats.bonEnlevement',['data'=>$data]);
        $pdf->save(storage_path().'_filename.pdf');
        return $pdf->download($data['referenceVente'].'.pdf');


//        return $data;
    }
    
    
    public function listeInventaire(){
        $arr = [];
        $nom= null;
        $types = Type::with('stocks.type.article')->get();
        foreach($types as $k => $item){
            $tab = [];
            foreach($item['stocks'] as $y => $val){
                $arr[$val['magasin_id']][$val['type_id']]['nom'] = $val['type']['article']['designation'].' '.$item['nomType'];
                $arr[$val['magasin_id']][$val['type_id']]['quantite'] = $val['quantiteActuel'];

            }
        }
        
        

        $pdf = \PDF::loadView('etats.inventaire',['data'=>$arr]);
        $pdf->save(storage_path().'_filename.pdf');
         return $pdf->download('inventaire.pdf');
//        return $arr;
    }
    
    
}