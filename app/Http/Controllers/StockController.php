<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Stock;
use App\Type;
use App\Vente;
use DB;

class StockController extends Controller
{
    
    
    public function getStock(){
        
        $timestamp = strtotime(now());
        $day = date('d', $timestamp);
        $month = date('m', $timestamp);
        $year = date('Y', $timestamp);
        $date = $year.'-'.$month.'-'.$day ;
//        dd($day);
//        dd(now());
        
        $arr = [];
        $i=0;
        $nom= null;
        $types = Type::with('stocks.type.article')->get();
        $mtnVte = DB::table('ventes')->whereDate('created_at', $date)->sum('prixTotal');
        $mtnVersee = DB::table('ventes')->whereDate('created_at', $date)->sum('sommeVersee');
        foreach($types as $k => $item){
            $tab = [];
            foreach($item['stocks'] as $val){
                $nom = ' ';
                if($val['magasin_id'] == 1){
                    $tab['BOUTIQUE'] = $val['quantiteActuelle'];
                }
                else{
                    if($val['magasin_id'] == 2){
                        $tab['RAKIETA'] = $val['quantiteActuelle'];
                    }
                    else{
                        $tab['CORAM'] = $val['quantiteActuelle'];
                    }
                }
                $nom = $val['type']['article']['designation'];
            }
            if(count($tab) > 0){
                $arr[$i]['id'] = $item['id'];
                $arr[$i][1] = $nom.' '.$item['nomType'];
                $nom = ' ';
                $arr[$i][0] = $tab;
                $i++;
            }
        }
        
//        return response()-> json();
        return [$arr,$mtnVte,$mtnVersee];
    }
    
    
    
    
    public function gotStock(){
        $arr = [];
        $tab= [];
        $i=0;
        $nom= ['','Boutique','Rakieta','Coram'];
        $types = Type::with('stocks.type.article')->get();
        foreach($types as $k => $item){
            foreach($item['stocks'] as $i => $val){
                
                $arr[$val['type_id']][$val['magasin_id']]['quantie'] = $val['quantiteActuelle'];
                $arr[$val['type_id']][$val['magasin_id']]['magasin'] = $nom[$val['magasin_id']];
                $arr[$val['type_id']][$val['magasin_id']]['magasin_id'] = $val['magasin_id'];
                $arr[$val['type_id']][$val['magasin_id']]['type_id'] = $val['type_id'];
                $arr[$val['type_id']][$val['magasin_id']]['article'] = $val['type']['article']['designation'] .' '.$val['type']['nomType'];
            }
            
        }
        
        foreach($arr as $k => $value){
            foreach($value as  $valeur){
                $tab[$i-1] = $valeur;
                $i++;
            }
        }
    
        
        return $tab;
//        return $arr;
    }
}
