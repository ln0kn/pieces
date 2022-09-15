<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use OwenIt\Auditing\Contracts\Auditable;

class Client extends Model implements Auditable
{
    use \OwenIt\Auditing\Auditable;
    
    public function compte(){
        return $this->hasMany('App\Compte');
    }
    
    public function getFullNameAttribute()
    {
        return $this->nomClient ." ". $this->telephoneClient;
    }
}
