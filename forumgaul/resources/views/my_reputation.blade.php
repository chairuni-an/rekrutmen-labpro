@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <div class="panel panel-default">
                <div class="panel-heading">My Reputation</div>
                <div class="panel-body"> 
                    @foreach($rep as $rp)
                        <div class="col-md-12">
                            <div class="col-md-1">{{ $rp->value }}</div>
                            <div class="col-md-3">{{ $rp->post_id }}</div>
                            <div class="col-md-3">{{ $rp->giver_id }}</div>
                            <div class="col-md-4">{{ $rp->message }}</div>
                        </div>
                    @endforeach
                </div>
                
            </div>
        </div>
    </div>
</div>
@endsection
