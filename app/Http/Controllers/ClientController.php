<?php

namespace App\Http\Controllers;

use App\Http\Resources\ClientResource;
use App\Models\Client;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    public function clientsSearch(Request $request) {

        $validatedData = $this->validate($request, [
            'search' => 'required|string',
        ]);

        $search = $validatedData['search'];

        $clients = Client::where(function ($query)use ($search) {
            $query->orWhere('first_name', 'like', '%'.$search.'%')
                  ->orWhere('last_name', 'like', '%'.$search.'%');
        })
        ->get();

        return response()->json([
            $clients
        ]);
    }

    public function create(Request $request)
    {
        $validatedData = $this->validate($request, [
            'firstName' => 'required|string|max:30',
            'lastName' => 'required|string|max:30',
        ]);

        $client = new Client();

        $client->first_name = $validatedData['firstName'];
        $client->last_name = $validatedData['lastName'];
        $client->save();

        return response()->json([
            'id' => $client->id,
            'firstName'=> $client->first_name,
            'lastName'=> $client->last_name
        ]);
    }
}
