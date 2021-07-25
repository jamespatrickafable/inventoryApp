<?php

namespace App\Http\Controllers;
use App\Models\Truck;
use Illuminate\Http\Request;

class TruckController extends Controller {
    
    public function truck(Request $request){
        $truck= Truck::create($request->all()); 
        return response()->json($truck,201);
        Log::info('Add Truck'.$request);
        Log::debug($request);
    }
    public function getAllTruck() {
        return response()->json(Truck::all());
        Log::info('showing trucks'.$request);
        Log::debug($request);
    }

}