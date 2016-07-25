<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::auth();

Route::get('/home', 'HomeController@index');

/*** THREADS ***/
Route::get('/threads', 'ThreadController@index');

Route::get('/create_thread', function() {
	return view('thread_creator');
});

Route::post('/thread_creator', 'ThreadController@store');

Route::get('/thread_created', function() {
	return view('thread_created');
});

/*** POSTS ***/
Route::get('/threads/{thread_id}', 'PostController@index');

Route::get('/threads/{thread_id}/create_post', function($thread_id) {
	return view('post_creator', ['thread_id' => $thread_id]);
});

Route::post('/threads/{thread_id}/create_post', 'PostController@store');

Route::get('/post_created', function() {
	return view('post_created');
});