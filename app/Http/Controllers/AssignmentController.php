<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\Assignment;
use Illuminate\Http\Request;
use App\Http\Resources\AssignmentResource;
use DateTime;

class AssignmentController extends Controller
{
    public function createAssignment(Request $request)
    {

        $validatedData = $this->validate($request, [
            'date'       => 'required|string',
            'time'       => 'required|string',
            'computer'   => 'required|integer',
            'client'     => 'required|integer',
        ]);

        $hourData = $validatedData['time'];
        $hour = ($hourData < 10) ? "0" . $hourData : $hourData ;

        $time = new DateTime($hour.":00:00");
        $computer_id = $validatedData['computer'];
        $client_id = $validatedData['client'];
        $date = $validatedData['date'];

        // update or create assignment
        $assignment = Assignment::updateOrCreate (
            [
                'date' => $date,
                'time' => $time,
                'computer_id' => $computer_id,
            ],
            [
                'client_id' => $client_id
            ]
        )
        ->with("client")->whereHas("client", function($user) use($client_id){
            $user->where("id", $client_id);
        })
        ->with("computer")->whereHas("computer", function($user) use($computer_id){
            $user->where("id", $computer_id);
        })
        ->where("date", $date)
        ->where("time", $time)
        ->get();


        return response()->json([
            'success' => false,
            'message' => "l'affectation a bien été ajoutée",
            'assignment' => $assignment
        ]);

    }

    public function delete(Request $request)
    {
        $validatedData = $this->validate($request, [
            'id' => 'required|integer',
        ]);
        $assignment=Assignment::find($validatedData['id']);

        if($assignment === null) {
            return response()->json([
                'success' => false,
                'message' => "l'assignation n'existe pas",
            ]);
        }

        $assignment->delete();

        return response()->json([
            'success' => true,
            'message' => "l'assignation a été supprimé",
        ]);
    }

}
