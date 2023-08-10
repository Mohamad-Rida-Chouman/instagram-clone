<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::all();
        return response()->json($posts);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'image_url'=>'required|string',
            'number_of_likes'=>'required|numeric'
        ]);

        if($validator->fails()){
            return response()->json($validator->errors(),500);
        }

        $post = Post::create($request->all());
        return response()->json($post, 200);
    }

    public function show(Post $post)
    {
        return response()->json($post, 200);
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(),[
            'image_url'=>'nullable|string',
            'number_of_likes' => 'required|numeric',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors(), 500);
        }

        // $post = update($request->all());

        $post = Post::find($id);
            $post->number_of_likes = ($request['number_of_likes']);
            $post->save();
        return response()->json($post, 200);
    }

    public function destroy(Post $post)
    {
        $post->delete();
        return response()->json('', 200);
    }

    public function assignToUser(Request $request, Post $post){
        $userId = $request->get('user_id');
        if($userId){
            $post->owner()->sync($userId);
        }
    }

    public function addLike(Request $request, Post $post){
        $userId = $request->get('user_id');
        if($userId){
            $post->liked()->sync($userId);
        }
    }

}
