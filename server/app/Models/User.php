<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use PHPOpenSourceSaver\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable  implements JWTSubject
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'username',
        'email',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }

    public function posts()
    {
        return $this -> hasMany(Post::class);
    }

    // public function followers()
    // {
    //     return $this -> belongsToMany(User::class, 'followers', 'user_id', 'follower_id');
    // }

    public function following()
    {
        return $this -> belongsToMany(User::class, 'followers', 'follower_id', 'user_id')->withTimestamps();
    }

    public function postsRelation(){
        return $this->belongsToMany(Post::class, 'user_posts', 'user_id', 'post_id')
                    ->withTimestamps();
    }

    public function likes(){
        return $this->belongsToMany(Post::class, 'likes', 'user_id', 'post_id')
                    ->withTimestamps();
    }
}
