<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Home', [
            'title' => 'Jasa pembuatan website Purbalingga Indonesia'
        ]);
    }

    public function contact()
    {
        return Inertia::render('Contact', [
            'title' => 'Kontak Arfenaz Jasa pembuatan website'
        ]);
    }
}
