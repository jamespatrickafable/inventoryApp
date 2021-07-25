<?php

namespace App\Http\Controllers;
use App\Models\Users;
use Illuminate\Http\Request;

class UsersController extends Controller {
    
    public function users(Request $request){
        $users= Users::create($request->all()); 
        return response()->json($users,201);
        Log::info('Register Users'.$request);
        Log::debug($request);
    }

}