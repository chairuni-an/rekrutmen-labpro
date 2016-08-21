@extends('layouts.app')

@section('content')
<style>
.splash {
    text-align : center;
    font-family : Segoe UI;
}
.justified {
    text-align : justify;
    margin-bottom : 40px;
}
</style>
<div class="container">
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <div class="panel panel-default">
                <div class="panel-heading">Welcome</div>

                <div class="panel-body">
                    <div class="col-md-1"></div>
                    <div class="col-md-10 justified">
                        <div class="col-md-4">
                            <img src="/forumgaul/resources/img/splash-firework.jpg" style="width : 100%;">
                        </div>
                        <div class="col-md-4">
                            <img src="/forumgaul/resources/img/splash-cat.png" style="width : 100%;">
                        </div>
                        <div class="col-md-4">
                            <img src="/forumgaul/resources/img/splash-firework.jpg" style="width : 100%;">
                        </div>
                        <div class="col-md-12">
                            <h1 class="splash">Selamat datang di Forum Gaulzz!!</h1>
                            <h4>Forum ini merupakan sarana berkumpul bagi anak-anak muda 
                                yang senang berkenalan dengan orang-orang baru 
                                dan ingin menambah skill ke-gaulzz-an dengan teman-temannya.</h4>
                            <h4>Silahkan daftar pada menu Register apabila belum memiliki akun, 
                                atau login untuk masuk ke dalam aplikasi</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
