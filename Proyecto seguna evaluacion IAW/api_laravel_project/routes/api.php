<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/categories', 'App\Http\Controllers\CategoryController@index');
Route::post('/categories', 'App\Http\Controllers\CategoryController@store');
Route::get('/categories/{category}', 'App\Http\Controllers\CategoryController@show');
Route::put('/categories/{category}', 'App\Http\Controllers\CategoryController@update');
Route::delete('/categories/{category}', 'App\Http\Controllers\CategoryController@destroy');

Route::get('/furnitures/search/category/{category_id}', 'App\Http\Controllers\FurnitureController@searchProductsByCategory');

Route::get('/furnitures', 'App\Http\Controllers\FurnitureController@index');
Route::post('/furnitures', 'App\Http\Controllers\FurnitureController@store');
Route::get('/furnitures/{furniture}', 'App\Http\Controllers\FurnitureController@show');
Route::put('/furnitures/{furniture}', 'App\Http\Controllers\FurnitureController@update');
Route::delete('/furnitures/{furniture}', 'App\Http\Controllers\FurnitureController@destroy');
