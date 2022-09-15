<?php

namespace App\Http\Controllers;
//use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Article;
use App\Type;
use Validator;
class ArticleController extends Controller
{
    
    public function addArticle(Request $request)
    {
    $valide = $validator = Validator::make($request->all(), [
          'designation' => 'required',
          'emballage' => 'required',
          'type' => 'required',
        ]);

        if ($valide->fails()) {
          return response()->json([
            'fail' =>true,
            'errors' => $valide->errors()
          ]);
        }
//        dd($request['emballage']);
        $art = new Article ();
        $art -> designation = $request['designation'];
        $art -> emballage_id = $request['emballage']['id'];
        $art ->save ();
        
        
        foreach($request['type'] as $val){
            $type =new Type();
            $type -> article_id= $art -> id ;
            $type -> nomType = $val;
            $type -> save();
            
        }
        $art -> types;
        $art -> emballage;
        
        return $art;
    }
     
    
    public function editArticle(Request $request)
    {
    $valide = Validator::make($request->all(), [
          'designation' => 'required',
          'emballage' => 'required',
          'type' => 'required',
          'id' => 'required',
        ]);

        if ($valide->fails()) {
          return response()->json([
            'fail' =>true,
            'errors' => $valide->errors()
          ]);
        }
        
        $art = Article::find($request['id']);
        $art -> designation = $request['designation'];
        $art -> emballage_id = $request['emballage']['id'];
        $art ->save ();
        
        $art -> types() -> delete();
        
        foreach($request['type'] as $val){
            $type =new Type();
            $type -> article_id= $art -> id ;
            $type -> nomType = $val;
            $type -> save();
            
        }    
        $art -> types;
        $art -> emballage;
    
        return $art;
    }
    
    
    public function deleteArticle(Request $request)
    {
    $valide = Validator::make($request->all(), [
          'id' => 'required',
        ]);

        if ($valide->fails()) {
          return response()->json([
            'fail' =>true,
            'errors' => $valide->errors()
          ]);
        }
//        dd($request);
        $art = Article::find($request['id']);
        $art -> types() -> delete();
        $art -> delete();
        return $art;
    }
    
    public function getArticle(){
//        return Article::where('id',1)->with('types')->get();
        return Article::with('types')->with('emballage')->get();
    }
    
    
    public function getTypArt(){
        return Article::with('types')->with('emballage')->get() ;
               
    }
    
}
