@extends('layouts.app')
<style>
.col-md-4-profile {
    border-right: 2px solid #ccc;
    height : auto;
    text-align : center;
}
.timestamp {
    color : green;
    font-family: consolas;
}
.single-post {
    border-top : 2px solid black;
    margin-bottom : 20px;
}
.profile-info {
    text-align : left;
}
</style>
@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <div class="panel panel-default">
                <div class="panel-heading">{{ $thread[0]->title }}</div>
                <div class="panel-body">
                    @foreach ($posts as $post)
                        <div class='col-md-12 single-post'>
                            <div class="row" style="border-bottom: 2px solid #ccc;">
                                <div class='col-md-6 timestamp'>{{ $post->created_at }}</div>
                                <div class='col-md-6' style="text-align: right;">{{ $post->id }}</div>
                            </div>
                            <div class='col-md-4 col-md-4-profile'>
                                <a href="{{url('profile/'.$post->user_id)}}">
                                    <h5><strong>{{ $post->name }}</strong></h5>
                                </a>
                                <div class='col-md-12'>
                                    <img src="{{ $post->avatar }}" style="width: 50%">
                                </div>
                                <div class='col-md-12 profile-info'>
                                    Location : {{ $post->city }} <br>
                                    Total reputation :
                                    @foreach($users_reps as $ur)
                                        @if($ur->id == $post->user_id)
                                            @if($ur->total_reps == null)
                                                0
                                            @else
                                                {{ $ur->total_reps }}
                                            @endif
                                        @endif
                                    @endforeach
                                </div>

                                <div class='col-md-12'>
                                    <a href="{{url('add_reputation/'.$post->id)}}">
                                        <img src="/forumgaul/public/rep.png" height=50px title="Give reputation!">
                                    </a>
                                </div>

                                

                            </div>
                            <div class='col-md-8'>
                                <h5><strong> {{ $post->title }} </strong></h5>
                                <p>{{ $post->message }}</p>
                            </div>
                        </div>
                    @endforeach
                </div>
                @if (Auth::guest())
                <div class="panel">
                    <div class="panel-heading">You must be logged in to post a reply</div>
                </div>
                @else
                        <button class="btn btn-primary" type="button" onclick="window.location='{{ url("threads/".$thread_id."/create_post") }}'">
                            Create a Post
                        </button>
                @endif
            </div>
        </div>
    </div>
</div>
@endsection
