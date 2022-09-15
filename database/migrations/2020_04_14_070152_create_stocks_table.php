<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStocksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('stocks', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('quantiteAnterieure');
            $table->integer('variation');
            $table->integer('quantiteActuelle');
            $table->unsignedBigInteger('transfert_id')->nullable();
            $table->foreign('transfert_id')->references('id')->on('transferts');
            $table->unsignedBigInteger('casse_id')->nullable();
            $table->foreign('casse_id')->references('id')->on('casses');
            $table->unsignedBigInteger('approvisionnement_id')->nullable();
            $table->foreign('approvisionnement_id')->references('id')->on('approvisionnements');

            $table->unsignedBigInteger('vente_id')->nullable();
            $table->foreign('vente_id')->references('id')->on('ventes');
            $table->unsignedBigInteger('type_id');
            $table->foreign('type_id')->references('id')->on('types');
            $table->unsignedBigInteger('magasin_id');
            $table->foreign('magasin_id')->references('id')->on('magasins');
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
        Schema::dropIfExists('stocks');
    }
}
