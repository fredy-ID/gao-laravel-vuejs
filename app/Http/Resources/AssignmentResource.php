<?php

namespace App\Http\Resources;

use App\Models\Client;
use App\Models\Computer;
use App\Http\Resources\ClientResource;
use Illuminate\Http\Resources\Json\JsonResource;

class AssignmentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'date' => $this->date,
            'time' => $this->time,
            'client_id' => new ClientResource(Client::find($this->client_id)),
            // 'computer_id' => new ComputerResource(Computer::find($this->computer_id)),
        ];
    }
}
