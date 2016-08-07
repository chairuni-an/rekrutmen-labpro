@extends('layouts.app')

@section('content')
<style>
.div-red {
    background-color : lightsalmon;
}
.div-green {
    background-color : greenyellow;
}
.div-blue {
    background-color: mediumturquoise;
    font-weight : bold;
}
.div-table {
    border-bottom : 2px solid white;
    padding : 10px 0px;
}

</style>
<div class="container">
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <div class="panel panel-default">
                <div class="panel-heading">My Reputation</div>
                <div class="panel-body">
                    <h4>
                        <div class="col-md-12 div-table div-blue">
                            <div class="col-md-1"></div>
                            <div class="col-md-3">Timestamp</div>
                            <div class="col-md-3">From</div>
                            <div class="col-md-5">Message</div>
                        </div>
                    </h4>
                    @foreach($rep as $rp)
                        <h4>
                            <a href="{{url('viewpost/'.$rp->post_id)}}">
                                @if($rp->value == 1)
                                <div class="col-md-12 div-green div-table">
                                    <div class="col-md-1">
                                        <img src="/forumgaul/resources/img/good.png" style="width: 50%;">
                                    </div>
                                @else
                                <div class="col-md-12 div-red div-table">
                                    <div class="col-md-1">
                                        <img src="/forumgaul/resources/img/bad.png" style="width: 50%;">
                                    </div>
                                @endif
                                    <div class="col-md-3">{{ $rp->created_at }}</div>
                                    <div class="col-md-3">{{ $rp->giver_name }}</div>
                                    <div class="col-md-5">{{ $rp->message }}</div>
                                </div>
                            </a>
                        </h4>
                    @endforeach
                </div>
                
            </div>
        </div>
    </div>
</div>
@endsection
