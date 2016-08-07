@extends('layouts.app')

@section('content')
<style>
.tiles {
    padding-top : 10px;
    text-align : center;
    padding-bottom : 10px;
}
.tiles-up {
    border-bottom : 2px solid #ccc;
}
.tiles-left {
    border-right : 2px solid #ccc;
}
</style>
<div class="container">
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <div class="panel panel-default">
                <div class="panel-heading">Dashboard</div>

                <div class="panel-body">
                    <div class="col-md-2"></div>
                    <div class="col-md-8">
                        <a href="{{url('threads')}}">
                            <div class="col-md-6 tiles tiles-up tiles-left">
                                <div class="col-md-12">
                                    <img src="/forumgaul/resources/img/menu-forum.png" style="width : 75%">
                                </div>
                                <div class="col-md-12"><h4>Go to Forum</h4></div>
                            </div>
                        </a>
                        <a href="{{url('create_thread')}}">
                            <div class="col-md-6 tiles tiles-up">
                                <div class="col-md-12">
                                    <img src="/forumgaul/resources/img/menu-thread.png" style="width : 75%">
                                </div>
                                <div class="col-md-12"><h4>Start a Thread</h4></div>
                            </div>
                        </a>
                        <a href="{{url('my_profile')}}">
                            <div class="col-md-6 tiles tiles-left">
                                <div class="col-md-12">
                                    <img src="/forumgaul/resources/img/menu-user.png" style="width : 75%">
                                </div>
                                <div class="col-md-12"><h4>User Control Panel</h4></div>
                            </div>
                        </a>
                        <a href="{{url('logout')}}">
                            <div class="col-md-6 tiles">
                                <div class="col-md-12">
                                    <img src="/forumgaul/resources/img/menu-logout.png" style="width : 75%">
                                </div>
                                <div class="col-md-12"><h4>Logout</h4></div>
                            </div>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
