<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class NameController extends Controller
{
    public function hello($nama = NULL) {
    	if($nama == NULL) return view('hello', ['name' => 'World']);
    	return view('hello', ['name' => $nama]);
    }
};
