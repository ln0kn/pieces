<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use OwenIt\Auditing\Contracts\Auditable;

class Magasin extends Model implements Auditable
{
    use \OwenIt\Auditing\Auditable;
    
    
    public function setLibelleAttribute($value)
    {
        $this->attributes['libelle'] = strtolower($value);
    }
}
