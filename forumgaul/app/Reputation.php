<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reputation extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'reps';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'post_id', 'giver_id', 'value', 'message'
    ];

    /**
     * Get the post that belongs the Reputation
     * 
     */
    public function post() {
        return $this->belongsTo('App\Post');
    }
}
