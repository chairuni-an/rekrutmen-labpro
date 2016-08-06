@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <div class="panel panel-default">
                <div class="panel-heading"><h4>Category: Ngobrol Cantik</h4></div>
                <div class="panel-body">
                    @foreach ($threads_1 as $thread)
                    <a href="{{ url('threads/'.$thread->id) }}">
                        <div class='col-md-12'>
                            <h4> {{ $thread->title }} </h4>
                            <h5> Started by {{ $thread->name }}</h5>
                        </div>
                    </a>
                    @endforeach
                </div>
            </div>
            <div class="panel panel-default">
                <div class="panel-heading"><h4>Category: Ngobrol Teknologi</h4></div>
                <div class="panel-body">
                    @foreach ($threads_2 as $thread)
                    <a href="{{ url('threads/'.$thread->id) }}">
                        <div class='col-md-12'>
                            <h4> {{ $thread->title }} </h4>
                            <h5> Started by {{ $thread->name }}</h5>
                        </div>
                    </a>
                    @endforeach
                </div>
            </div>
            <div class="panel panel-default">
                <div class="panel-heading"><h4>Category: Ngobrol 4L4YyZzZ</h4></div>
                <div class="panel-body">
                    @foreach ($threads_3 as $thread)
                    <a href="{{ url('threads/'.$thread->id) }}">
                        <div class='col-md-12'>
                            <h4> {{ $thread->title }} </h4>
                            <h5> Started by {{ $thread->name }}</h5>
                        </div>
                    </a>
                    @endforeach
                </div>
            </div>
            <div class="panel panel-default">
                <div class="panel-heading"><h4>Category: Ngobrol Lucu-Lucu Jayuzzz</h4></div>
                <div class="panel-body">
                    @foreach ($threads_4 as $thread)
                    <a href="{{ url('threads/'.$thread->id) }}">
                        <div class='col-md-12'>
                            <h4> {{ $thread->title }} </h4>
                            <h5> Started by {{ $thread->name }}</h5>
                        </div>
                    </a>
                    @endforeach
                </div>
            </div>
            </div>
        </div>
    </div>
</div>
@endsection
