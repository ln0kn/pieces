<?php

namespace App\Http\Controllers;

use App\Article;
use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ApplicationController extends Controller
{
    public function __invoke()
    {
        return view('application');
    }
    
    
}
