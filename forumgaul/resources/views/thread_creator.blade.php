@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <div class="panel panel-default">
                <div class="panel-heading">Thread Creator Page</div>
                <div class="panel-body">
                    {!! Form::open(array('url' => 'thread_creator')) !!}
                        <div class="form-group">
                        {{ Form::label('title', 'Thread Title') }} 
                        {{ Form::input('text', 'title') }}

                        {{ Form::label('category', 'Category') }} 
                        {{ Form::select('category', array(
                            '1' => 'Ngobrol Cantik', 
                            '2' => 'Ngobrol Teknologi',
                            '3' => 'Ngobrol 4L4YyZzZ',
                            '4' => 'Ngobrol Lucu-Lucu Jayuzzz'), 
                        '1') }} <br>

                        <div>
                        {{ Form::label('message', 'Message') }} <br>
                        {{ Form::textarea('message') }} 
                        </div><br>
                        
                        {{ Form::submit('Submit') }}
                        </div>
                    {!! Form::close() !!}
                    
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
