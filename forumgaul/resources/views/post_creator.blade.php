@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <div class="panel panel-default">
                <div class="panel-heading">Post Creator Page</div>
                <div class="panel-body">
                    {!! Form::open(array('action' => array('PostController@store', $thread_id))) !!}
                        <div class="form-group">
                            <div class="col-md-10">
                                <label for="title">Title</label> 
                                <input name="title" type="text" id="title" class="form-control">

                                <label for="message">Message</label> <br>
                                <textarea name="message" cols="50" rows="10" id="message" class="form-control"></textarea> 
                            </div>
                            <div class="col-md-10">
                                <br> <input type="submit" value="Submit" class="btn btn-primary">
                            </div>
                        </div>
                    {!! Form::close() !!}
                    
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
