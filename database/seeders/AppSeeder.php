<?php

namespace Database\Seeders;

use App\Models\Client;
use App\Models\Computer;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AppSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = [
            [
                'id' => 1,
                'email' => 'admin@admin.fr',
                'password' => 'abcd',

            ]
        ];

        DB::table('user')->insert($user);
        // DB::table('computer')->insert([ 'name' => Str::random(10),]);

        Computer::factory()->times(5)->create();
        Client::factory()->times(10)->create();

    }
}
