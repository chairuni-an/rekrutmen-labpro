@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <div class="panel panel-default">
                <div class="panel-heading">Edit My Profile</div>
                <div class="panel-body">
                    {!! Form::open(array('action' => array('UserController@update'), 
                                         'files' => true)) !!}
                    <div class="col-md-4">
                        <img src="{{ Auth::user()->avatar }}" style="width: 100%;">
                    </div>
                    <div class="col-md-8">
                        <h3> ID Number: <strong>#{{ Auth::user()->id }}</strong></h3>
                        <div class="col-md-4"><label for="name">Name</label></div>
                        <div class="col-md-8">
                            <input name="name" type="text" id="name" class="form-control" value="{{ Auth::user()->name }}">
                        </div>

                        <div class="col-md-4"><label for="email">Email</label></div>
                        <div class="col-md-8" style="height: 34px;">
                            <strong>{{ Auth::user()->email }}</strong>
                        </div>
                        
                        <div class="col-md-4"><label for="city">City</label></div>
                        <div class="col-md-8">
                            <input name="city" type="text" id="city" class="form-control"  value="{{ Auth::user()->city }}">
                        </div>

                        <div class="col-md-4"><label for="bio">Bio</label></div>
                        <div class="col-md-8">
                            <input name="bio" type="text" id="bio" class="form-control"  value="{{ Auth::user()->bio }}">
                        </div>

                        <div class="col-md-4"><label for="avatar">Change Avatar</label></div>
                        <div class="col-md-8">
                            <input name="avatar" id="avatar" type="file" class="control">
                        </div>

                        <br>
                        <input type="submit" value="Save" class="btn btn-primary">
                    </div>
                    {!! Form::close() !!}
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
