<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
  return $request->user();
});

Route::group(['middleware' => 'api'], function() {
  Route::get('test', function (Request $request) {
    return json_encode([['id' => 1], ['id' => 2]]);
  });
  Route::resource('articles', 'ArticleController');
});


// JWTAuth
Route::group(['middleware' => 'api'], function () {
  Route::post('authenticate',  'AuthenticateController@authenticate');

  Route::group(['middleware' => 'jwt.auth'], function () {
    Route::resource('tasks',  'TaskController');
    Route::get('me',  'AuthenticateController@getCurrentUser');
  });
});
