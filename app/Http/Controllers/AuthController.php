<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
use App\Page;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function __construct()
     {
//        $this->middleware('auth:api', ['except' => ['login']]);
     }
    
     /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
     public function login()
     {
         $credentials = request(['email', 'password']);
         if (! $token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
         }
         return $this->respondWithToken($token);
     }
    
     /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
     public function me()
     {
        return response()->json(auth()->user());
     }
     
    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
     public function logout()
     {
         auth()->logout();
         return response()->json(['message' => 'Successfully logged out']);
     }
     /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
     public function refresh()
     {
        return $this->respondWithToken(auth()->refresh());
     }
     /**
     * Get the token array structure.
     *
     * @param string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
     protected function respondWithToken($token)
     {
         return response()->json([
             'access_token' => $token,
             'token_type'   => 'bearer',
             'expires_in'   => auth()->factory()->getTTL() * 60,
             'userData'     => auth()->user(),
         ]);
     }
    
    public function register(Request $request){
        $valide = $this -> validate($request,[
            'user.nomPrenom' => 'required',
//            'user.email' => 'required|email',
            'user.email' => 'required|email|unique:users,email',
            'permissions.*' => 'required',
            'user.motDePasse' => 'required|confirmed',
        ]);
//        if ($valide->fails()) {
//          return response()->json([
//            'fail' =>true,
//            'errors' => $valide->errors()
//          ]);
//        }
//            
        $user = new User([
            'name' => $request['user']['nomPrenom'],
            'email' => $request['user']['email'],
            'password' => bcrypt($request['user']['motDePasse']),
        ]);
        $user -> save();
        
        foreach($request['permission'] as $page => $value){
            foreach($value as $droit => $item){
                $Mag = new Page ();
                $Mag -> page = $page;
                $Mag -> permission = $droit ;
                $Mag -> statut = $item ;
                $Mag -> user_id = $user -> id;
                $Mag -> save ();
            }
        }
        
        return response()->json(['message' => 'utilisateur crée'],201);
    }
    
    public function deleteUser(Request $request){
        $valide = Validator::make($request->all(),[
            'id' => 'required|integer',
        ]);
        if ($valide->fails()) {
          return response()->json([
            'fail' =>true,
            'errors' => $valide->errors()
          ]);
        }
        $usr = User::find($request['id']);
        $usr -> droit ()-> delete ();
        $usr -> delete ();
        
        return $usr;
    }
    
    
    public function updateUser(Request $request){
        $valide = Validator::make($request->all(),[
            'user.id' => 'required|integer',
            'user.nomPrenom' => 'required',
            'user.email' => 'required|email|unique:users,email,'.$request['user']['id'].',id',
            'permissions.*' => 'required',
            'user.motDePasse' => 'nullable|string|min:6|confirmed',
        ]);
        if ($valide->fails()) {
          return response()->json([
            'fail' =>true,
            'errors' => $valide->errors()
          ]);
        }
        $usr = User::find($request['user']['id']);
        $usr -> name = $request['user']['nomPrenom'];
        $usr -> email = $request['user']['email'];
        
        if ($request['motDePasse']) 
            $usr -> password = bcrypt($request['motDePasse']);
        
        $usr -> save ();
        $usr -> droit ()-> delete ();
        
        
        foreach($request['permission'] as $page => $value){
            foreach($value as $droit => $item){
                $Mag = new Page ();
                $Mag -> page = $page;
                $Mag -> permission = $droit ;
                $Mag -> statut = $item ;
                $Mag -> user_id = $usr -> id;
                $Mag -> save ();
            }
        }
        
        $usr -> droit;
        return $usr;
    }
    
    public function getUser(){  
        return User::with('droit')->get();
    }
    
}
