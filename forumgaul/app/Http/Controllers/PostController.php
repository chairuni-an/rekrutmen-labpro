<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use Auth;
use App\Post;
use App\Thread;
use App\Http\Requests\PostRequest;

class PostController extends Controller
{
    /**
     *  Show a list of all available Posts
     *
     *  @return Response
     */
    public function index($thread_id) {
    	$posts = DB::table('posts')
                 ->where('posts.thread_id','=',$thread_id)
                 ->get();
    	return view('viewthread', ['posts' => $posts, 'thread_id' => $thread_id]);
    }

    /**
    *  Store a new post.
    *
    *  @param Request $request
    *  @return Response
    */
    public function store(PostRequest $request) {
    	$title = $request->input('title');
    	$message = $request->input('message');
        $user_id = Auth::user()->id;
        $thread_id = $request->thread_id;					/**** DUMMY VALUE *****/
        DB::table('posts')->insert(
            ['title' => $title, 'message' => $message, 'user_id' => $user_id, 'thread_id' => $thread_id]
        );
    	return redirect('post_created');
    }
}
