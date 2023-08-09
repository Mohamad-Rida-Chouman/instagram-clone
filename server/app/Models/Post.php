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

    public function user()
    {
        return $this -> belongsTo(User::class);
    }

    public function likes()
    {
        return $this -> hasMany(Like::class);
    }
}
