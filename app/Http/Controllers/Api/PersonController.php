<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Person;
use Illuminate\Http\Request;

class PersonController extends Controller
{
    public function index()
    {
        $people = Person::with('aliases')->get();

        return $people;
    }

    public function getSelected($status)
    {
        $people = Person::with('aliases')->where('status_id', '=', $status)->get();

        return $people;
    }
}
