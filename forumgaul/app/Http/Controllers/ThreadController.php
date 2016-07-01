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
    	$threads = Thread::all();
    	return view('thread', ['threads' => $threads]);
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
        DB::table('threads')->insert(
            ['title' => $title, 'category' => $category, 'user_id' => $user_id]
        );
    	return redirect('thread_created');
    }
}
