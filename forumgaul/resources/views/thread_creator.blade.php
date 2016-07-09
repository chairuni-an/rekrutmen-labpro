@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <div class="panel panel-default">
                <div class="panel-heading">Welcome</div>
                <div class="panel-body">
                    {!! Form::open(array('url' => 'thread_creator')) !!}
                        {{ Form::label('title', 'Thread Title') }} 
                        {{ Form::input('text', 'title') }} <br>

                        {{ Form::label('category', 'Category') }} 
                        {{ Form::select('category', array(
                            'N' => 'Ngobrol Cantik', 
                            'T' => 'Ngobrol Teknologi',
                            'A' => 'Ngobrol 4L4YyZzZ',
                            'H' => 'Ngobrol Lucu-Lucu Jayuzzz'), 
                        'N') }} <br>

                        {{ Form::submit('Submit') }}
                    {!! Form::close() !!}
                    
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
