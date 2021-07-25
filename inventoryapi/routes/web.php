<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->group(['prefix'=>'api'], function() use ($router){
    $router->get('item',['uses'=>'ItemController@getAllItem']);
    $router->get('item/{$id}',['uses'=>'ItemController@getItem']);
    $router->put('creation',['uses' =>'ItemController@create']);
    $router->put('truck',['uses' =>'TruckController@truck']);
    $router->get('trucklist',['uses'=>'TruckController@getAllTruck']);
    $router->put('item/{$id}',['uses' =>'ItemController@update']);

});