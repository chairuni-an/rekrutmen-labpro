<?php

namespace App\Http\Controllers;

use DB;
use Auth;
use App\Thread;
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
                     ->get();
        $threads_2 = DB::table('threads')
                     ->join('users','users.id', '=', 'threads.user_id')
                     ->select('threads.*', 'users.name')
                     ->where('category', '=', '2')
                     ->get();
        $threads_3 = DB::table('threads')
                     ->join('users','users.id', '=', 'threads.user_id')
                     ->select('threads.*', 'users.name')
                     ->where('category', '=', '3')
                     ->get();
        $threads_4 = DB::table('threads')
                     ->join('users','users.id', '=', 'threads.user_id')
                     ->select('threads.*', 'users.name')
                     ->where('category', '=', '4')
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
    	$title = $request->input('title');
    	$category = $request->input('category');
        $user_id = Auth::user()->id;
        $thread_id = DB::table('threads')->insertGetId(
            ['title' => $title, 'category' => $category, 'user_id' => $user_id]
        );

        $message = $request->input('message');
        DB::table('posts')->insert(
            ['title' => $title, 'message' => $message, 'user_id' => $user_id, 'thread_id' => $thread_id]
        );

    	return redirect('thread_created');
    }
}
