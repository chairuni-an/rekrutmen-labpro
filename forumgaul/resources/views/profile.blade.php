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
                <div class="panel-heading">View Profile</div>
                <div class="panel-body">
                    <div class="col-md-4">
                        <img src="{{ $user->avatar }}" style="width: 100%;">
                    </div>
                    <div class="col-md-8">
                        <h3>   
                            <div class="col-md-4 div-strong margin-bottom">ID Number</div>
                            <div class="col-md-8 div-strong margin-bottom">#{{ $user->id }}</div>
                        </h3>
                        <h4>
                            <div class="col-md-4 div-strong margin-bottom">Nama</div>
                            <div class="col-md-8 margin-bottom">{{ $user->name }}</div>

                            <div class="col-md-4 div-strong margin-bottom">Email</div>
                            <div class="col-md-8 margin-bottom">{{ $user->email }}</div>

                            <div class="col-md-4 div-strong margin-bottom">Location</div>
                            <div class="col-md-8 margin-bottom">{{ $user->city }}</div>

                            <div class="col-md-4 div-strong margin-bottom">Bio</div>
                            <div class="col-md-8 margin-bottom">{{ $user->bio }}</div>

                            <div class="col-md-4 div-strong margin-bottom">Total Reputation</div>
                            <div class="col-md-8 margin-bottom">{{ $sum_reps }}</div>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
