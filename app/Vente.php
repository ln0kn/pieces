<?php
namespace App;

use Illuminate\Database\Eloquent\Model;
use OwenIt\Auditing\Contracts\Auditable;

class Vente extends Model implements Auditable
{
    use \OwenIt\Auditing\Auditable;
    public function articles(){
        return $this -> belongsToMany('App\Type','article_ventes')->withPivot('quantite', 'prixUnitaire','magasin_id');
    }
    public function client(){
        return $this -> belongsTo('App\Client');
    }
    public function stocks()
      {
          return $this->hasMany('App\Stock','vente_id');
      }
}