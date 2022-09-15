<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use OwenIt\Auditing\Contracts\Auditable;

class Commande extends Model implements Auditable
{
    use \OwenIt\Auditing\Auditable;
    public function types(){
        return $this -> belongsToMany('App\Type','article_commandes')->withPivot('quantite', 'prixUnitaire','magasin_id');
    }
    
//    public function types(){
//        return $this -> hasMany('App\Type','article_commandes');
//    }
}
