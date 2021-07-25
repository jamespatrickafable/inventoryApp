<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;


 class Truck extends Model{
    public $timestamps = false;

    protected $fillable = [
        'tname','dname'
    ];
    
    protected $hidden = [];
 }