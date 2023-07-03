<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request){
      
      
      

    }
}


// $validator = Validator::make($request->all(), [
//          'name'=>'required|min:2|max:100',
//          'email'=>'required|email|unique:users',
//          'password' => 'required|min:6|max:12',
//          'confirm_password' => 'required|same:password'
//         ]);