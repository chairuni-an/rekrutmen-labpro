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
                 ->join('users', 'users.id', '=', 'posts.user_id')
                 ->where('posts.thread_id','=',$thread_id)
                 ->select('users.id as userID', 'posts.*', 'users.name', 'users.city', 'users.avatar')
                 ->orderBy('posts.created_at')
                 ->get();

        $thread = DB::table('threads')
                  ->where('threads.id', '=', $thread_id)
                  ->get();

        $users_reps = DB::table('reps')
                    ->rightJoin('posts', 'posts.id', '=', 'reps.post_id')
                    ->select('posts.user_id AS id', DB::raw('sum(value) AS total_reps'))
                    ->groupBy('id')
                    ->get();

        $users_posts = DB::table('posts')
                       ->rightJoin('users', 'users.id', '=', 'posts.user_id')
                       ->select('users.id AS user_id', DB::raw('count(*) AS total_posts'))
                       ->groupBy('users.id')
                       ->get();

    	return view('viewthread', ['posts' => $posts, 'thread_id' => $thread_id, 'thread' => $thread,
                                    'users_reps' => $users_reps, 'users_posts' => $users_posts]);
    }

    /**
    *  Store a new post.
    *
    *  @param Request $request
    *  @return Response
    */
    public function store(PostRequest $request) {
        $post = new Post;
    	$post->title = $request->input('title');
    	$post->message = $request->input('message');
        $post->user_id = Auth::user()->id;
        $post->thread_id = $request->thread_id;					/**** DUMMY VALUE *****/
        $post->save();

        $thread = Thread::find($post->thread_id);
        $thread->touch();
    	return redirect('threads/'.$request->thread_id);
    }

    public function view($post_id) {
        $posts = DB::table('posts')
                 ->join('users', 'users.id', '=', 'posts.user_id')
                 ->where('posts.id','=',$post_id)
                 ->select('users.id as userID', 'posts.*', 'users.name', 'users.city', 'users.avatar')
                 ->orderBy('posts.created_at')
                 ->get();

        $users_reps = DB::table('reps')
                    ->rightJoin('posts', 'posts.id', '=', 'reps.post_id')
                    ->select('posts.user_id AS id', DB::raw('sum(value) AS total_reps'))
                    ->groupBy('id')
                    ->get();

        $users_posts = DB::table('posts')
                       ->rightJoin('users', 'users.id', '=', 'posts.user_id')
                       ->select('users.id AS user_id', DB::raw('count(*) AS total_posts'))
                       ->groupBy('users.id')
                       ->get();

        return view('viewpost', ['posts' => $posts, 'post_id' => $post_id,
                                    'users_reps' => $users_reps, 'users_posts' => $users_posts]);
    }
}
