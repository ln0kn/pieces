<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use OwenIt\Auditing\Contracts\Auditable;

class Compte extends Model implements Auditable
{
    use \OwenIt\Auditing\Auditable;
    
    protected $table = 'comptes';
    protected $fillable = ['soldeAnterieur','variation','soldeActuel','client_id','vente_id'];
    
    public function client(){
        return $this -> belongsTo('App\Client');
    }
    
    public function avoir(){
        return $this -> hasOne('App\AvoirCredit');
    }
    
    
}
