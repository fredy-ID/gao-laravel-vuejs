<?php

namespace App\Http\Controllers;

use App\Models\Computer;
use Illuminate\Http\Request;

class AssignmentController extends Controller
{
    public function add(Request $request)
    {

            $validatedData = $this->validate($request, [
                'name' => 'required|string',
            ]);

            $addComputer = new Computer();

            $addComputer->name = $validatedData['name'];

            $addComputer->save();

            // return new ComputerResource($addComputer);


    }
}
