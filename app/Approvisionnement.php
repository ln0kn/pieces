<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use OwenIt\Auditing\Contracts\Auditable;

class Approvisionnement  extends Model implements Auditable
{
    use \OwenIt\Auditing\Auditable;
    
   public function types(){
      return $this -> belongsToMany('App\Type','approvisionnement_types') -> withPivot('quantite','magasin_id');    
   }
   
   public function stocks(){
      return $this -> hasMany('App\Stock','approvisionnement_id');
  }
}
