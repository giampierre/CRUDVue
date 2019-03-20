<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Articulos;

class ArticulosController extends Controller
{
    public function getArticulos()
    {
        $articulos = Articulos::all();
        return $articulos;
    }

    public function saveArticulo(Request $request)
    {
        $Articulos = new Articulos;
        $Articulos->codigo = $request->input('codigo');
        $Articulos->nombre = $request->input('nombre');
        $Articulos->marca =  $request->input('marca');
        $Articulos->modelo = $request->input('modelo');
        $Articulos->save();
        
        return $Articulos;
    }

}
