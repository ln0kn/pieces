<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use OwenIt\Auditing\Contracts\Auditable;

class Stock extends Model implements Auditable
{
    use \OwenIt\Auditing\Auditable;
    public function type(){
        return $this -> belongsTo('App\Type');
    }
}
