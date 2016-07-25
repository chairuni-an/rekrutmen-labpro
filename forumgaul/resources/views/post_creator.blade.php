@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <div class="panel panel-default">
                <div class="panel-heading">Welcome</div>
                <div class="panel-body">
                    {!! Form::open(array('action' => array('PostController@store', $thread_id))) !!}
                        {{ Form::label('title', 'Title') }} {{ Form::input('text', 'title') }} <br>
                        {{ Form::label('message', 'Message') }} {{ Form::input('text', 'message') }} <br>
                        {{ Form::submit('Submit') }}
                    {!! Form::close() !!}
                    
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
