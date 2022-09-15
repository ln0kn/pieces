<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use OwenIt\Auditing\Contracts\Auditable;

class Casse extends Model implements Auditable
{
    use \OwenIt\Auditing\Auditable;
    public function types(){
        return $this -> belongsToMany('App\Type','casse_types') -> withPivot('casse_id','magasin_id','type_id','quantite'); 
     }

     public function stocks(){
        return $this -> hasMany('App\Stock','casse_id');
    }
}
