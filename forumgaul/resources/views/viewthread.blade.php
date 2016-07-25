@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <div class="panel panel-default">
                <div class="panel-heading">Ini loh {{ $thread_id }}</div>
                <div class="panel-body">
                    <ul>
                    @foreach ($posts as $post)
                      <li>
                        ### {{ $post->title }} 
                        <br> 
                        By : {{ $post->user_id }}
                        <br>
                        {{ $post->message }}</li>
                    @endforeach
                  </ul>
                </div>
                <button type="button" onclick="window.location='{{ url("threads/".$thread_id."/create_post") }}'">Create a Post</button>
            </div>
        </div>
    </div>
</div>
@endsection
