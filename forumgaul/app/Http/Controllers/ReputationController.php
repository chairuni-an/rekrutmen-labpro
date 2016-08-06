<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use DB;
use Auth;
use App\Post;
use App\Thread;
use App\Reputation;
use App\Http\Requests\ReputationRequest;

class ReputationController extends Controller
{
	public function initform($post_id) {
		$post = Post::find($post_id);
		$posting_user = $post->user_id;
		return view('add_reputation', ['post_id' => $post_id, 'posting_user' => $posting_user]);
	}

    public function add(ReputationRequest $request) {
    	$rep = new Reputation;
    	$rep->post_id = $request->post_id;
    	$rep->giver_id = Auth::user()->id;

    	$val = $request->input('value');
    	if($val == 'good') {
    		$val = 1;
    	}
    	else {
    		$val = -1;
    	}

        $rep->value = $val;
    	$rep->message = $request->input('message');
    	$rep->save();
    	return view('reputation_given');
    }

    public function index() {
        $my_posts = Post::where('user_id', '=', Auth::user()->id)->get();
        $my_reps = $my_posts->first()->reputation;
        foreach($my_posts as $post) {
            $this_post_rep = $post->reputation;
            $my_reps = $my_reps->merge($this_post_rep);
        }
        return view('my_reputation', ['rep' => $my_reps]);
    }
}
