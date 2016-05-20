#Resume Eksplorasi 1 - Framework Laravel
Oleh : Robert Sebastian Herlim / 13514061

##Filosofi
Laravel is a web application framework with **expressive, elegant syntax**. We believe development must be an enjoyable, creative experience to be truly fulfilling. Laravel attempts to take the pain out of development by **easing common tasks** used in the majority of web projects, such as authentication, routing, sessions, and caching.

Laravel aims to make the development process a pleasing one for the developer without sacrificing application functionality. Happy developers make the best code. To this end, we've attempted to combine the very best of what we have seen in other web frameworks, including frameworks implemented in other languages, such as Ruby on Rails, ASP.NET MVC, and Sinatra.

Laravel is accessible, yet powerful, providing powerful tools needed for large, robust applications. A superb inversion of control container, expressive migration system, and tightly integrated unit testing support give you the tools you need to build any application with which you are tasked.

Sumber : https://laravel.com/docs/4.2/introduction 

##Kelebihan
+ Menggunakan PHP 5.3 (versi terbaru)
+ Syntax yang cool & expressive
+ Composer → menginstall library secara otomatis. 
+ Framework artisan → coding rapih dan readable.
+ Fitur Eloquent ORM → menyederhanakan proses query ke database
+ Full MVC (Model View Controller)
+ Blade Templating
+ Dokumentasi jelas “katanya”

##Kekurangan
- *Quite slow, and a new platform for most of the developers to deal with.*
- *Amateur developers face problems while extending codes and classes*
- *Community support is not wide in comparison with other platforms*
- *Many methods included in the reverse routing are complex*

##Struktur
Struktur dari sebuah Laravel project (framework versi 4) adalah sebagai berikut,
1.	app/ adalah tempat default untuk semua kode projek aplikasi yang sudah ditulis/dikonfigurasi. Dalam folder app juga terdapat folder dan file sbb
..1. commands/, menyimpan self-created perintah-perintah
..2.	config/, konfigurasi framework dan aplikasi
..3.	controllers/, menyimpan kelas-kelas PHP controller
..4.	databases/, menyimpan keperluan basisdata
..5.	lang/, menyimpan berbagai lokalisasi bahasa
..6.	models/, berisi kelas-kelas model yg berkaitan dengan interaksi ke database
..7.	start/, menyimpan file untuk prosedur aplikasi
..8.	storage/, menyimpan file-file yang dibuat oleh Laravel ke harddisk
..9.	tests/, menyimpan semua unit tests
..10.	views/, menyimpan file-file PHP untuk keperluan tampilan (front-end)
..11.	filters.php, file yang berisi filter untuk routes aplikasi.
..12.	routes.php, semua route untuk aplikasi
2.	bootstrap/, merupakan folder yang berisi file-file prosedur untuk framework Laravel. Beberapa file yang mungkin boleh diedit oleh pengguna Laravel yg berpengalaman
..1.	autoload.php, berisi sebagian besar prosedur framework
..2.	paths.php, berisi array dari jalur sistem file yang digunakan oleh framework
..3.	start.php, berisi tentang prosedur bagaimana framework Laravel berjalan.
3.	vendor/, merupakan folder yang berisi semua paket Composer yang digunakan 
4.	public/, merupakan folder yang berisi assets yang digunakan : file-file CSS, JS, image, dll.
5.	.gitattributes dan .gitignore
6.	artisan, merupakan file yang berfungsi untuk menjalankan perintah-perintah artisan CLI
7.	composer.json dan composer.lock
8.	phpunit.xml
9.	server.php

##Pengunaan
Requirement untuk menggunakan framework Laravel:
1.	Text Editor
2.	Webserver dan Database
3.	Composer

###Routing
Routing digunakan untuk meng-handle **request** yang kita berikan ke aplikasi web. Bisa jadi routing adalah jembatan yang menghubungkan kita dengan respon yang akan diberikan oleh web aplilkasi. Jadi setiap ada permintaan (request) terhadap alamat tertentu, maka akan alamat akan dieksekusi terlebih dahulu dalam routing sebelum akhirnya akan menampilkan hasil (response).
Routes selalu dideklarasikan menggunakan kelas Routes dan salah satu method yang dipakai untuk request sebuah halaman webpage yaitu GET menggunakan HTTP. GET request ini dikirim setiap waktu ketika kita mengetikan sebuah alamat web di web browser. 

```php
Route::get('/', function() { 
return 'hello laravel'; 
});

Route::get('helloworld', function() { 
return 'hello world from laravel framework’; 
});
```

Disamping method GET, ada juga method POST yang digunakan untuk membuat sebuah permitaan (request) dan menyediakan sebuah data yang relatif kecil. Normalnya method ini digunakan sebagai sebuah hasil submit dari form dimana data akan dikirimkan ke database tanpa ditampilkan ke URL. Beberapa method lainnya yang disediakan oleh kelas Routes : PUT, DELETE, ANY.

Routing berparameter

```php
Route::get('welcome/{nama?}', function($nama=null) {
	if ($nama == null) return "Welcome back, NULL!";
	return "Welcome back, ".$nama."!";
});
```

###MVC
MVC atau kepanjangan dari Model-View-Controller adalah sebuah metode yang digunakan dalam pengembangan suatu aplikasi yang memisahkan data (model) dari tampilan / frontend (View) dan logic dari aplikasi itu sendiri (Controller). MVC memisahkan pengembangan aplikasi berdasarkan komponen utama yang membangun sebuah aplikasi seperti manipulasi data, antarmuka pengguna dan kontrol dalam sebuah aplikasi.

**Model** digunakan untuk proses query atau manipulasi data ke/dari database. Sedangkan **View** kaitannya erat dengan antarmuka / frontend tampilan sebuah web seperti HTML, CSS dan JS dan data yang bersifat client. **Controller** adalah logika dari sebuah web. Menjembatani komunikasi antara **Model** dan **View**.

###Blade Templating
Template engine adalah sebuah method untuk mempersingkat penulisan kode yang lebih panjang contoh nya yaitu smartt, twigg dan doo. Sedangkan **blade** itu sendiri adalah template engine bawaan laravel. Blade menawarkan penulisan kode/sintax yang mudah dan singkat untuk dipakai dalam menghasilkan kode HTML. 

Pada bagian **View** inilah fungsi **Blade** sangat dibutuhkan. View seperti yang sudah kita tahu berfungsi menampilkan sebuah halaman web, namun bukan berarti dalam view tersebut tidak bisa melakukan proses logic. Disinilah peran blade yang dibutuhkan untuk membantu menuliskan logic agar manjadi lebih simple. Disamping itu, blade juga berfungsi untuk memisahkan layout suatu web dengan layout tertentu dan blade sendiri mendukung inheritance (OOP). Semua file blade harus menggunakan ekstensi **.blade**. Contoh jika kita membuat sebuah file Book.php maka untuk bisa menggunakan fitur blade, maka harus diberi nama menjadi **Book.blade.php** . Blade juga mendukung penuh proses looping dan kondisi-logika PHP seperti **@for, @foreach, @while , @if dan @elseif**. Berikut adalah perbedaan mendasar antara sintak PHP dan blade.

| PHP Syntax 				  					| Blade Syntax 						|
|------------------------------------------		|---------------------------------	|
|```<?php echo $var; ?>``` 		  				| ```{{ $var }}	```					| 
|```<?php echo htmlentities($var); ?>```		| ```{{{ $var }}} ```				|
|```<?php if($cond) : ?> .. <?php endif; ?>``` 	|	```@if($cond) .. @endif```		|


Referensi : http://pondokprogrammer.com/wp-content/uploads/2014/12/tutorial_dasar_laravel.pdf 