<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    public function signup(){
        $this -> validate($request,[
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required',
        ]);
            
        $user = new User([
            'name' => $request -> input('name'),
            'email' => $request -> input('email'),
            'password' => bcrypt($request -> input('password')),
        ]);
        $user -> save();
        
        return response()->json(['message' => 'utilisateur crée'],201);
        
    }
}
