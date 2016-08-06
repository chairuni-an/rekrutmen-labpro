@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <div class="panel panel-default">
                <div class="panel-heading">Reputation to post #{{$post_id}}</div>
                <div class="panel-body"> 
                    @if ($posting_user == Auth::user()->id)
                        <div class='col-md-12'>
                            You cannot give reputation to your own post.
                        </div>
                    @else
                    {!! Form::open(array('action' => array('ReputationController@add', $post_id))) !!}
                        <div class='col-md-12'>
                            <div class='col-md-6'>
                                {{ Form::radio('value', 'good', true) }}
                                {{ Form::label('good', 'Gue Suka Bangetzz!! :)') }}
                            </div>
                            <div class='col-md-6'>
                                {{ Form::radio('value', 'bad') }}
                                {{ Form::label('good', 'Apaan nich??!! :(') }}
                            </div>
                        </div>
                        <div class='col-md-12'>
                            <div class='col-md-2'>
                                {{ Form::label('message', 'Message :')}}
                            </div>
                            <div class='col-md-8'>
                                {{ Form::text('message', null, ['class' => 'form-control']) }}
                            </div>
                            {{ Form::submit('Give Reputation', ['class' => 'btn btn-primary'])}}
                        </div>
                    {!! Form::close() !!}
                    @endif
                </div>
                
            </div>
        </div>
    </div>
</div>
@endsection
