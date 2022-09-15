<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use OwenIt\Auditing\Contracts\Auditable;

class Ajustement extends Model implements Auditable
{
    use \OwenIt\Auditing\Auditable;
    
    public function mag(){
        return $this -> belongsTo('App\Magasin','magasin_id');
    }
    
    public function type(){
        return $this -> belongsTo('App\Type');
    }
}
