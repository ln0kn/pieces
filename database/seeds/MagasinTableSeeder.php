<?php

use Illuminate\Database\Seeder;

class MagasinTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
//        for($i = 18 ; $i <= 25 ; $i++)
            DB::table('stocks')->insert([
            'quantiteAnterieur' => 0,
            'variation' => 100,
            'quantiteActuel' => 100,
            'type_id' => 18,
            'magasin_id' => 1,
             ]);
            DB::table('stocks')->insert([
            'quantiteAnterieur' => 0,
            'variation' => 100,
            'quantiteActuel' => 100,
            'type_id' => 18,
            'magasin_id' => 2,
             ]);
            DB::table('stocks')->insert([
            'quantiteAnterieur' => 0,
            'variation' => 100,
            'quantiteActuel' => 100,
            'type_id' => 18,
            'magasin_id' => 3,
             ]);
            DB::table('stocks')->insert([
            'quantiteAnterieur' => 0,
            'variation' => 100,
            'quantiteActuel' => 100,
            'type_id' => 19,
            'magasin_id' => 1,
             ]);
            DB::table('stocks')->insert([
            'quantiteAnterieur' => 0,
            'variation' => 100,
            'quantiteActuel' => 100,
            'type_id' => 19,
            'magasin_id' => 2,
             ]);
            DB::table('stocks')->insert([
            'quantiteAnterieur' => 0,
            'variation' => 100,
            'quantiteActuel' => 100,
            'type_id' => 19,
            'magasin_id' => 3,
             ]);
            DB::table('stocks')->insert([
            'quantiteAnterieur' => 0,
            'variation' => 100,
            'quantiteActuel' => 100,
            'type_id' => 20,
            'magasin_id' => 1,
             ]);
            DB::table('stocks')->insert([
            'quantiteAnterieur' => 0,
            'variation' => 100,
            'quantiteActuel' => 100,
            'type_id' => 20,
            'magasin_id' => 2,
             ]);
            DB::table('stocks')->insert([
            'quantiteAnterieur' => 0,
            'variation' => 100,
            'quantiteActuel' => 100,
            'type_id' => 20,
            'magasin_id' => 3,
             ]);
            DB::table('stocks')->insert([
            'quantiteAnterieur' => 0,
            'variation' => 100,
            'quantiteActuel' => 100,
            'type_id' => 21,
            'magasin_id' => 1,
             ]);
            DB::table('stocks')->insert([
            'quantiteAnterieur' => 0,
            'variation' => 100,
            'quantiteActuel' => 100,
            'type_id' => 21,
            'magasin_id' => 2,
             ]);
            DB::table('stocks')->insert([
            'quantiteAnterieur' => 0,
            'variation' => 100,
            'quantiteActuel' => 100,
            'type_id' => 21,
            'magasin_id' => 3,
             ]);
            DB::table('stocks')->insert([
            'quantiteAnterieur' => 0,
            'variation' => 100,
            'quantiteActuel' => 100,
            'type_id' => 22,
            'magasin_id' => 1,
             ]);
            DB::table('stocks')->insert([
            'quantiteAnterieur' => 0,
            'variation' => 100,
            'quantiteActuel' => 100,
            'type_id' => 22,
            'magasin_id' => 2,
             ]);
            DB::table('stocks')->insert([
            'quantiteAnterieur' => 0,
            'variation' => 100,
            'quantiteActuel' => 100,
            'type_id' => 22,
            'magasin_id' => 3,
             ]);
            
       
            
            
            
        
    }
}
