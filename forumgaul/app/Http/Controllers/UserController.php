<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use Auth;
use App\User;
use App\Reputation;
use App\Post;
use App\Http\Requests;
use App\Http\Requests\ProfileUpdateRequest;

class UserController extends Controller
{
    /**
     *  View someone's profile
     *
     *  @return Response
     */
    public function view($user_id) {
    	$user = User::find($user_id);
        $users = DB::table('reps')
                ->join('posts', 'posts.id', '=', 'reps.post_id')
                ->select('posts.user_id AS id', DB::raw('sum(value) AS total_reps'))
                ->groupBy('id')
                ->get();
        $sum_reps = 0;
        foreach($users as $user_it) {
            if($user_it->id == $user_id) {
                $sum_reps = $user_it->total_reps;
            }
        }
    	return view('profile', ['user' => $user, 'sum_reps' => $sum_reps]);
    }

    /**
     *  Update someone's profile
     *
     *  @param ProfileUpdateRequest $request
     *  @return Response
     */
    public function update(ProfileUpdateRequest $request) {
    	$user = User::find(Auth::user()->id);
    	$user->name = $request->input('name');
    	$user->city = $request->input('city');
    	$user->bio = $request->input('bio');

    	if($request->hasFile('avatar')) {
    		if($request->file('avatar')->isValid()) {
    			$destinationPath = "/forumgaul/resources/img/";
    			$filename = "ava".Auth::user()->id.'.'.$request->file('avatar')->getClientOriginalExtension();

                $file = $request->file('avatar');
                $file->move($destinationPath, $filename);

    			$user->avatar = $destinationPath.$filename;
    		}
    	}
    	
    	$user->save();
    	return redirect('/my_profile');
    }
}
