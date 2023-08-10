<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'image_url', 'number_of_likes',
    ];

    // public function user()
    // {
    //     return $this -> belongsTo(User::class);
    // }

    public function owner(){
        return $this->belongsToMany(User::class, 'user_posts', 'post_id', 'user_id')->withTimeStamps();
    }

    public function liked(){
        return $this->belongsToMany(User::class, 'likes', 'post_id', 'user_id')->withTimeStamps();
    }
}
