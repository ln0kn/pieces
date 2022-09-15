<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class TransfertType extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {   Schema::create('transfert_types', function (Blueprint $table) {
        $table->bigIncrements('id');
        $table->integer('quantite');
        $table->integer('magasinDepart');
        $table->integer('magasinArrive');
        $table->unsignedBigInteger('transfert_id');
        $table->foreign('transfert_id')->references('id')->on('transferts');
        $table->unsignedBigInteger('type_id');
        $table->foreign('type_id')->references('id')->on('types');
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
        //
    }
}
