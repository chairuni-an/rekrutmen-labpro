<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Thread extends Model
{
	/**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'threads';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title', 'category',
    ];

    /**
    *  Get the posts for the thread.
    */
    public function posts() {
        return $this->hasMany('App\Post');
    }

    /**
    *  Get the thread starter
    */
    public function user() {
        return $this->hasOne('App\User');
    }
}
