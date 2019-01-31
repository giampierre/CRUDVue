<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('layout/app');
});

Route::get('articulos', function () {
    return view('articulos/articulos');
});

Route::get('getArticulos','ArticulosController@getArticulos');
Route::post('registrarArticulo','ArticulosController@registrarArticulo');


