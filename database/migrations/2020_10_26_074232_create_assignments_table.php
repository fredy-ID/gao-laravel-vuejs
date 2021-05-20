<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAssignmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('assignment', function (Blueprint $table) {
            $table->id();
            $table->date("date");
            $table->time("time", 0);
            $table->integer("client_id")->unsigned();
            $table->foreign("client_id")->references('id')->on('client')->onDelete('cascade');
            $table->integer("computer_id")->unsigned();
            $table->foreign("computer_id")->references('id')->on('computer')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('assignment');
    }
}
