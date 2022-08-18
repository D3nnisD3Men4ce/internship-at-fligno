<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('plant_data', function (Blueprint $table) {
            $table->id();
            $table->nutSol();
            $table->humidity();
            $table->phVal();
            $table->temp();
            $table->waterTemp();
            $table->waterLevel();
            $table->lux();
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
        Schema::dropIfExists('plant_data');
    }
};