<?php

use Illuminate\Database\Seeder;

class ClientTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for($i=1 ; $i<= 5 ; $i++){
            DB::table('clients')->insert([
            'nomClient' => Str::random(10),
            'telephoneClient' => '7071727'.$i,
             ]);
            DB::table('comptes')->insert([
            'soldeAnterieur' => 0,
            'variation' => $i.'000',
            'client_id' => $i,
            'soldeActuel' => $i.'000',
            ]);
        }
        
    }
}
