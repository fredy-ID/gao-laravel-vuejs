<?php

namespace App\Http\Controllers;

use App\Models\Computer;
use Illuminate\Http\Request;
use App\Http\Resources\ComputerResource;

class ComputerController extends Controller
{
    public function computers() {
        return Computer::all();
    }

    public function create(Request $request)
    {
        $validatedData = $this->validate($request, [
            'name' => 'required|string|max:30',
        ]);

        $addComputer = new Computer();

        $addComputer->name = $validatedData['name'];

        $addComputer->save();

        return ComputerResource::collection(Computer::all());
    }

}
