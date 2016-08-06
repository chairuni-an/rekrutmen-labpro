<?php

namespace App\Http\Controllers;

use DB;
use Auth;
use App\Thread;
use App\Post;
use App\Http\Requests\ThreadRequest;
use App\Http\Controllers\Controller;

class ThreadController extends Controller
{
    /**
     *  Show a list of all available Threads
     *
     *  @return Response
     */
    public function index() {
        $threads_1 = DB::table('threads')
                     ->join('users','users.id', '=', 'threads.user_id')
                     ->select('threads.*', 'users.name')
                     ->where('threads.category', '=', '1')
                     ->orderBy('updated_at', 'desc')
                     ->get();
        $threads_2 = DB::table('threads')
                     ->join('users','users.id', '=', 'threads.user_id')
                     ->select('threads.*', 'users.name')
                     ->where('category', '=', '2')
                     ->orderBy('updated_at', 'desc')
                     ->get();
        $threads_3 = DB::table('threads')
                     ->join('users','users.id', '=', 'threads.user_id')
                     ->select('threads.*', 'users.name')
                     ->where('category', '=', '3')
                     ->orderBy('updated_at', 'desc')
                     ->get();
        $threads_4 = DB::table('threads')
                     ->join('users','users.id', '=', 'threads.user_id')
                     ->select('threads.*', 'users.name')
                     ->where('category', '=', '4')
                     ->orderBy('updated_at', 'desc')
                     ->get();
    	return view('thread', ['threads_1' => $threads_1, 'threads_2' => $threads_2, 
                               'threads_3' => $threads_3, 'threads_4' => $threads_4]);
    }

    /**
    *  Store a new thread.
    *
    *  @param Request $request
    *  @return Response
    */
    public function store(ThreadRequest $request) {
        $thread = new Thread;
    	$thread->title = $request->input('title');
    	$thread->category = $request->input('category');
        $thread->user_id = Auth::user()->id;
        $thread->save();

        $post = new Post;
        $post->title = $request->input('title');
        $post->message = $request->input('message');
        $post->user_id = Auth::user()->id;
        $post->thread_id = $thread->id;
        $post->save();

    	return redirect('thread_created');
    }
}
