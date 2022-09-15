<?php

namespace App\Http\Middleware;
use Auth;
use Closure;

class Droit
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $state = [];
        $message = [];
        switch ($request->method()) {
            case 'GET':
                $racine = substr($request->url(),25);
                $message = 'vous n êtes pas autorisé à voir la liste des '.$racine;
                $state = Auth::user()->droit()->where('page',lcfirst($racine))->where('permission','voir')->get();
            break;
            case 'POST':
                
                $racine = substr($request->url(),25);
                $message = 'vous n êtes pas autorisé à ajouter des '.$racine;
                $state = Auth::user()->droit()->where('page',lcfirst($racine))->where('permission','ajouter')->get();
                
                break;
            case 'PUT':
                $racine = substr($request->url(),26);
                $message = 'vous n êtes pas autorisé à modifier les '.$racine;
                $state = Auth::user()->droit()->where('page',lcfirst($racine))->where('permission','modifier')->get();
                break;
            case 'DELETE':
                $racine = substr($request->url(),28);
                $message = 'vous n êtes pas autorisé à supprimer les '.$racine;
                $state = Auth::user()->droit()->where('page',lcfirst($racine))->where('permission','supprimer')->get();
            break;       
        }
        if($state[0]['statut'] ==  1)
                    return $next($request);
                else 
                  return response()->json([
                    'accredidation' =>true,
                    'message' =>$message,
                  ],400);
   
    }
}