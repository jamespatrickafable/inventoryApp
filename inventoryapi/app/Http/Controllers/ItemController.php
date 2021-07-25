<?php

namespace App\Http\Controllers;
use App\Models\Item;
use Illuminate\Http\Request;

class ItemController extends Controller {
    public function getAllItem() {
        return response()->json(Item::all());
        Log::info('showing items'.$request);
        Log::debug($request);
    }
    
    public function create(Request $request){
        $item= Item::create($request->all()); 
        return response()->json($item,201);
        Log::info('Adding Items'.$request);
        Log::debug($request);
    }

    public function update($id, Request $request){
        $item = Item::findOrFail($id);
        $item->update($request->all());

        return response()->json($item,200);
    }
    
    public function getItem($id){
        return response()->json($Item::find($id));
    }
}