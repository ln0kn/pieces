<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use OwenIt\Auditing\Contracts\Auditable;

class Article extends Model implements Auditable
{
    use \OwenIt\Auditing\Auditable;
    
    public function setDesignationAttribute($value)
    {
        $this->attributes['designation'] = strtolower($value);
    }
    
    public function types()
    {
        return $this->hasMany('App\Type');      
    }
    public function emballage()
    {
        return $this->belongsTo('App\Emballage');      
    }
}
