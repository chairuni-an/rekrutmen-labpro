![Logo](http://static.yiiframework.com/css/img/logo.png)

## Filosofi Framework
Yii adalah framework (kerangka kerja) PHP berbasis-komponen, berkinerja tinggi untuk pengembangan aplikasi Web berskala-besar. Yii menyediakan reusability maksimum dalam pemrograman Web dan mampu meningkatkan kecepatan pengembangan secara signifikan. Nama Yii (dieja sebagai /i:/) singkatan dari "Yes It Is!". Berikut merupakan respon yang paling tepat dan akurat untuk yang baru dengan Yii:

Apakah Yii cepat? ... Apakah Yii aman? ... Apakah Yii profesional? ... Apakah Yii cocok untuk projek saya berikutnya? ... Yes, it is!

## Kelebihan Framework
* Yii adalah salah satu framework yang sangat ringan dan dilengkapi dengan solusi caching yang memuaskan.
* Yii sangat cocok untuk pengembangan aplikasi dengan lalu lintas-tinggi, seperti portal, manajemen konten (CMS), sistem e-commerce, dll.
* Yii didokumentasikan dengan jelas, efisien, dan kaya-fitur.
* Adanya generator CRUD dan model (dengan menggunakan Gii).
* Built-in Ajax untuk Grid View

## Kekurangan Framework
* Tidak kompatibel dengan PHP 4
* Banyak yang harus dipelajari


## Struktur
Yii mengimplementasikan pola desain model-view-controller (MVC). Dalam MVC, model menggambarkan informasi (data) dan aturan bisnis; view(tampilan) berisi elemen antar muka pengguna seperti teks, input form; sementara controller mengatur komunikasi antar model dan view. Selain implementasi MVC, Yii juga memiliki entitas-entitas berikut :
* _entry scripts_: komponen ini merupakan _PHP scripts_ yang secara langsung dapat diakses oleh pengguna. File ini bertanggung jawab untuk memulai _request handling cycle_.
* _applications_: komponen ini secara global merupakan objek yang dapat diakses yang berfungsi untuk mengelola komponen aplikasi dan mengkoordinasikan komponen tersebut untuk memenuhi _request_.
* _application components_: komponen ini merupakan objek yang terdaftar dengan apilasi dan menyediakan berbagai layanan untuk memenuhi _requests_
* _modules_: komponen ini merupakan paket mandiri yang berisi MVC. Aplikasi dapat diatur dalam beberapa modul.
* _filters_: komponen ini merepresentasikan kode yang perlu dipanggil sebelum dan sesudah penanganan sebenarnya untuk setiap _request_ dari _controllers_.
* _widgets_: komponen ini merupakan objek yang tertanam di _views_. Komponen ini mungkin memliki _logic_ dari _controllers_ dan dapat digunakan di _views_ yang berbeda.

Diagram berikut merupakan struktur statis dari aplikasi
![Static Structure](http://www.yiiframework.com/doc-2.0/images/application-structure.png)

## Request Lifecycle
Diagram berikut memperlihatkan bagaimana aplikasi menghandle request

![Request Lifecycle](http://www.yiiframework.com/doc-2.0/images/request-lifecycle.png)

1. Pengguna membuat _request_ ke _entry script_ web/index.php.
2. _Entry script_ memuat konfigurasi aplikasi dan membuat instans aplikasi untuk meng-_handle request_.
3. Aplikasi ini menyelesaikan rute yang diminta dengan bantuan komponen aplikasi permintaan.
4. Aplikasi membuat instans _controller_ untuk meng-_handle_ permintaan.
5. _Controller_ membuat instans _action_ dan melakukan filter untuk _action_.
6. Jika filter gagal, aksi dibatalkan.
7. Jika filter lolos, aksi dilakukan.
8. Aksi memuat data model, yang mungkin saja dari _database_.
9. Aksi membuat _view_, yang dimunculkan dengan data model.
10. Hasil dikembalikan ke komponen aplikasi respon.
11. Komponen respon mengirimkan hasil yang diberikan ke browser pengguna.

## Penggunaan
Hal pertama yang harus dilakukan adalah menginstal web server lokal seperti XAMPP atau WAMP.
Selanjutnya, Untuk menggunakan Framework Yii2, kita dapat melakukan proses instalasi dengan dua cara, yaitu dengan Composer atau download Arsip.
Pada bagian ini hanya akan dijelaskan proses instalasi dengan Composer.
Untuk dapat melakukan instalasi dengan menggunakan Composer, tentu kita diwajibkan untuk menginstal [Composer](http://www.getcomposer.org) terlebih dahulu.

Setelah composer sudah terinstall, buka terminal, lalu ketikkan perintah
```ActionScript
composer global require "fxp/composer-asset-plugin:~1.0.3"
```
Kemudian ketikkan perintah berikut untuk menggunakan template basic :
```ActionScript
composer create-project yiisoft/yii2-app-basic c:/xampp/htdocs/yiibasic 2.0.8
```
atau perintah berikut untuk menggunakan template advanced :
```ActionScript
composer create-project yiisoft/yii2-app-advanced c:/xampp/htdocs/yiiadvanced 2.0.8
```

###### References : 
* http://www.yiiframework.com/doc-2.0/guide-intro-yii.html
* http://cobadibacalagi.blogspot.co.id/2013/10/kelebihan-dan-kekurangan-beberapa-php.html
* http://wawan-kurniawan888.blogspot.co.id/2013/09/yii-framework.html
