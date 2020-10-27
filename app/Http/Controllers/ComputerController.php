<?php

namespace App\Http\Controllers;

use App\Models\Computer;
use Illuminate\Http\Request;

class ComputerController extends Controller
{
    public function computers() {
        $computers = Computer::get();
        return $computers;
    }
}