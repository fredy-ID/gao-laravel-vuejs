<?php

namespace App\Http\Controllers;

use App\Models\Computer;
use App\Models\Assignment;
use Illuminate\Http\Request;
use App\Http\Resources\ComputerResource;
use App\Http\Resources\AssignmentResource;

class ComputerController extends Controller
{
    public function computers() {

        return ComputerResource::collection(Computer::all());
    }

    public function create(Request $request)
    {
        $validatedData = $this->validate($request, [
            'name' => 'required|string|max:30',
        ]);

        $computer = new Computer();

        $computer->name = $validatedData['name'];

        $computer->save();

        return response()->json([
            'assignment' => [],
            'id' => $computer->id,
            'name'=> $computer->name
        ]);
    }

    public function edit(Request $request)
    {
        $validatedData = $this->validate($request, [
            'id' => 'required|integer',
            'name' => 'required|string|max:30',
        ]);

        $computer=Computer::find($validatedData['id']);

        if($computer === null) {
            return response()->json([
                'success' => false,
                'message' => "l'ordinateur n'existe pas",
            ]);
        }

        $computer->name = $validatedData['name'];
        $computer->save();

        return response()->json([
            'success' => true,
            'message' => "l'ordinateur a été modifié",
        ]);
    }

    public function delete(Request $request)
    {
        $validatedData = $this->validate($request, [
            'id' => 'required|integer',
        ]);
        $computer=Computer::find($validatedData['id']);

        if($computer === null) {
            return response()->json([
                'success' => false,
                'message' => "l'ordinateur n'existe pas",
            ]);
        }

        $computer->delete();

        return response()->json([
            'success' => true,
            'message' => "l'ordinateur a été supprimé",
        ]);
    }

    public function assignments() {
        return AssignmentResource::collection(Assignment::all());
    }

}
