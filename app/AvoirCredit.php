<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use OwenIt\Auditing\Contracts\Auditable;

class AvoirCredit extends Model implements Auditable
{
    use \OwenIt\Auditing\Auditable;
    public function compte(){
        return $this -> belongsTo('App\Compte');
    }
}
