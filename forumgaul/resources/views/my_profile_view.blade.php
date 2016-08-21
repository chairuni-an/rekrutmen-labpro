@extends('layouts.app')

@section('content')
<style>
.div-strong {
    font-weight : bold;
}
.margin-bottom {
    margin-bottom : 10px;
}
</style>
<div class="container">
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <div class="panel panel-default">
                <div class="panel-heading">My Profile</div>
                <div class="panel-body">
                    <div class="col-md-4">
                        <img src="{{ Auth::user()->avatar }}" style="width: 100%;">
                    </div>
                    <div class="col-md-8">
                        <h3>   
                            <div class="col-md-4 div-strong margin-bottom">ID Number</div>
                            <div class="col-md-8 div-strong margin-bottom">#{{ Auth::user()->id }}</div>
                        </h3>
                        <h4>
                            <div class="col-md-4 div-strong margin-bottom">Nama</div>
                            <div class="col-md-8 margin-bottom">{{ Auth::user()->name }}</div>

                            <div class="col-md-4 div-strong margin-bottom">Email</div>
                            <div class="col-md-8 margin-bottom">{{ Auth::user()->email }}</div>

                            <div class="col-md-4 div-strong margin-bottom">Location</div>
                            <div class="col-md-8 margin-bottom">{{ Auth::user()->city }}</div>

                            <div class="col-md-4 div-strong margin-bottom">Bio</div>
                            <div class="col-md-8 margin-bottom">{{ Auth::user()->bio }}</div>
                        </h4>
                        
                        <div class="col-md-12">
                            <button class="btn btn-primary" type="button" onclick="window.location='{{ url("edit_profile") }}'">
                                Edit Profile 
                            </button>
                            <button class="btn btn-primary" type="button" onclick="window.location='{{ url("my_reputation") }}'">
                                My Reputation
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
