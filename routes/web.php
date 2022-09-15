<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
// Article
Route::get('/getTypArt' , 'ArticleController@getTypArt');
//Route::get('/getAppArticle' , 'ArticleController@getAppArticle');
Route::post('/addArticle' , 'ArticleController@addArticle');
Route::put('/editArticle' , 'ArticleController@editArticle');
Route::delete('/deleteArticle' , 'ArticleController@deleteArticle');
Route::get('/getArticle','ArticleController@getArticle');

// Casse
Route::get('/getCasse' , 'CasseController@getCasse');
//Route::get('/getAppArticle' , 'ArticleController@getAppArticle');
Route::post('/addCasse' , 'CasseController@addCasse');
Route::put('/editCasse' , 'CasseController@editCasse');
Route::delete('/deleteCasse', 'CasseController@deleteCasse');

// Emballage
Route::get('/getEmballage' , 'EmballageController@getEmballage');
Route::post('/addEmballage' , 'EmballageController@addEmballage');
Route::put('/editEmballage' , 'EmballageController@editEmballage');
Route::delete('/deleteEmballage' , 'EmballageController@deleteEmballage');

// Magasin
Route::get('/getMagasin' , 'MagasinController@getMagasin');
Route::post('/addMagasin' , 'MagasinController@addMagasin');
Route::put('/editMagasin' , 'MagasinController@editMagasin');
Route::delete('/deleteMagasin' , 'MagasinController@deleteMagasin');

// Transfert
Route::get('/getTransfert' , 'TransfertController@getTransfert');
Route::post('/addTransfert' , 'TransfertController@addTransfert');
Route::put('/editTransfert' , 'TransfertController@editTransfert');
Route::delete('/deleteTransfert' , 'TransfertController@deleteTransfert');

// Depense
Route::get('/getDepense' , 'DepenseController@getDepense');
Route::post('/addDepense' , 'DepenseController@addDepense');
Route::put('/editDepense' , 'DepenseController@editDepense');
Route::delete('/deleteDepense' , 'DepenseController@deleteDepense');

//Approvisionnement

Route::get('/getApprovisionnement' , 'ApprovisionnementController@getApprovisionnement');
Route::post('/addApprovisionnement' , 'ApprovisionnementController@addApprovisionnement');
Route::put('/editApprovisionnement', 'ApprovisionnementController@editApprovisionnement');
Route::delete('/deleteApprovisionnement' , 'ApprovisionnementController@deleteApprovisionnement');
//Route::get('/getAppMag' , 'ApprovisionnementController@getAppMag');


Route::post('/addEmballage','EmballageController@addEmballage');
Route::delete('/deleteEmballage','EmballageController@deleteEmballage');
Route::put('/editEmballage','EmballageController@editEmballage');
Route::get('/getEmballage','EmballageController@getEmballage');


Route::post('/addArticle','ArticleController@addArticle');
Route::delete('/deleteArticle','ArticleController@deleteArticle');
Route::put('/editArticle','ArticleController@editArticle');
Route::get('/getArticle','ArticleController@getArticle');



Route::post('/addVente','VenteController@addVente');
Route::delete('/deleteVente','VenteController@deleteVente');
Route::put('/editVente','VenteController@editVente');
Route::get('/getVente','VenteController@getVente');


Route::post('/addCommande','CommandeController@addCommande');
Route::post('/commandeVente','CommandeController@commandeVente');
Route::delete('/deleteCommande','CommandeController@deleteCommande');
Route::put('/editCommande','CommandeController@editCommande');
Route::get('/getCommande','CommandeController@getCommande');


Route::get('/getVersement','AvoirCreditController@getVersement');
Route::post('/addVersement','AvoirCreditController@addVersement');
Route::put('/editVersement','AvoirCreditController@editVersement');
Route::delete('/deleteVersement','AvoirCreditController@deleteVersement');


Route::get('/getAjustement','AjustementController@getAjustement');
Route::post('/addAjustement','AjustementController@addAjustement');
Route::post('/listeInventaire','EtatController@listeInventaire');


Route::get('/getClient','ClientController@getClient');
Route::post('/addClient','ClientController@addClient');
Route::put('/editClient','ClientController@editClient');
Route::delete('/deleteClient','ClientController@deleteClient');



Route::get('/getStock','StockController@getStock');
Route::get('/gotStock','StockController@gotStock');
//Route::delete('/deleteVente','VenteController@deleteVente');
//Route::put('/editVente','VenteController@editVente');
//Route::get('/getVente','VenteController@getVente');

///////////////// # pdf a imprimer
Route::get('/venteFacture','EtatController@venteFacture');





Route::get('/{any}', 'ApplicationController')->where('any', '.*');
