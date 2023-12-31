<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostController;

Route::controller(AuthController::class)->group(function(){
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
});

Route::resource('posts', PostController::class);
Route::post('posts/{post}/user_posts', [PostController::class, 'assignToUser']);
Route::post('posts/{post}/likes', [PostController::class, 'addLike']);
Route::post('posts/{post}/unlikes', [PostController::class, 'removeLike']);
Route::post('users/{user}/follows', [AuthController::class, 'addFollower']);
Route::post('users/{user}/unfollows', [AuthController::class, 'removeFollower']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
