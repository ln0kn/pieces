<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ArticleVente extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('article_ventes', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('quantite');
            $table->integer('prixUnitaire');
            $table->unsignedBigInteger('vente_id');
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
        Schema::dropIfExists('article_ventes');
    }
}
