@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <div class="panel panel-default">
                <div class="panel-heading">Thread Creator Page</div>
                <div class="panel-body">
                    {!! Form::open(array('url' => 'thread_creator')) !!}
                        <div class="form-group">
                            <div class="col-md-6">
                                <label for="title">Thread Title</label> 
                                <input name="title" type="text" id="title" class="form-control">
                            </div>

                            <div class="col-md-4">
                                <label for="category">Category</label> 
                                <select id="category" name="category" class="form-control">
                                    <option value="1" selected="selected">Ngobrol Cantik</option>
                                    <option value="2">Ngobrol Teknologi</option>
                                    <option value="3">Ngobrol 4L4YyZzZ</option>
                                    <option value="4">Ngobrol Lucu-Lucu Jayuzzz</option>
                                </select>
                            </div>

                            <div class="col-md-10">
                                <label for="message">Message</label> <br>
                                <textarea name="message" cols="50" rows="10" id="message" class="form-control"></textarea> 
                            </div>
                            <div class="col-md-10">
                                <br><input type="submit" value="Submit" class="btn btn-primary">
                            </div>
                                                 
                        </div>
                    {!! Form::close() !!}
                    
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
