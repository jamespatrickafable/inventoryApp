<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;


 class Users extends Model{
    public $timestamps = false;

    protected $fillable = [
        'ownername','address', 'contact', 'username','password'
    ];
    
    protected $hidden = [];
 }