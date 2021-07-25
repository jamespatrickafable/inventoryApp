<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;


 class Item extends Model{
    public $timestamps = false;

    protected $fillable = [
        'code','item_name', 'item_price', 'item_stocks'
    ];
    
    protected $hidden = [];
 }