<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use OwenIt\Auditing\Contracts\Auditable;

class Transfert extends Model implements Auditable
{
    use \OwenIt\Auditing\Auditable;
    public function types(){
        return $this -> belongsToMany('App\Type','transfert_types') -> withPivot('transfert_id','magasinDepart','magasinArrive','type_id','quantite'); 
     }

     public function stocks(){
        return $this -> hasMany('App\Stock','transfert_id');
    }
}
