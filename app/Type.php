<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use OwenIt\Auditing\Contracts\Auditable;

class Type extends Model  implements Auditable
{
    use \OwenIt\Auditing\Auditable;
    
    public function article()
    {
        return $this->belongsTo('App\Article');      
    }
    public function stocks()
    {
        return $this->hasMany('App\Stock'); 
    }
    public function setNomTypeAttribute($value)
    {
        $this->attributes['nomType'] = strtolower($value);
    }

}
