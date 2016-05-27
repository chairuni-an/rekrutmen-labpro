<img src="https://www.excelisys.com/wp-content/uploads/2014/11/codeigniter-logo.png" width="480" heigth="120">

## Filosofi CodeIgniter
CodeIgniter adalah framework PHP yang kuat dengan footprint yang sangat kecil, dibangun untuk pengembang yang membutuhkan toolkit sederhana dan elegan untuk membuat aplikasi web dengan fitur lengkap. CodeIgniter merupakan framework PHP dengan model MVC (Model, View, Controller) untuk membangun website dinamis.

## Kelebihan CodeIgniter
*	Gratis
*	Mendukung PHP4 dan PHP5
<br> Hal ini merupakan salah satu keuntungan terbesar CodeIgniter karena tetap dapat digunakan untuk membuat aplikasi di server lama yang versi PHP-nya kurang dari 5.
*	Ukuran file kecil dan cepat
<br> CodeIgniter hanya me-load fungsi atau library yang digunakan saja. Berbeda dengan framework lainnya yang menggunakan seluruh library walaupun library tersebut tidak digunakan.
*	Dokumentasi yang jelas
<br> CodeIgniter menyediakan dokumentasi yang lengkap mulai dari instalasi hingga semua fungsi yang terdapat di dalamnya. Berikut merupakan situs untuk melihat dokumentasi dari CodeIgniter: http://www.codeigniter.com/user_guide/.
*	Memakai konsep MVC (Model, View, Controller)
<br> Dengan konsep MVC pengerjaan antara logika dengan layout dipisahkan, sehingga tugas antara programmer dengan designer tidak terlalu terikat.
*	Memiliki komunitas
<br> CodeIgniter memiliki komunitas pada situs codeigniter.com/forums.

## Kekurangan CodeIgniter
*	Update core engine tidak secepat framework lain
*	Library/plugin/extension yang sangat terbatas
<br> Plugin yang dapat digunakan untuk mendukung CodeIgniter sangat sedikit dibandingkan framework lainnya.
*	Tidak cocok digunakan pada proyek skala besar
<br> Fitur-fitur yang dimiliki oleh CodeIgniter sangat terbatas, sedangkan untuk proyek skala besar biasanya terdapat fitur-fitur yang rumit yang tidak disediakan pada CodeIgniter.
*	Tidak mencerminkan MVC secara sepenuhnya, misalnya penulisan echo masih dapat dilakukan pada file controller

## Struktur CodeIgniter
![Struktur](http://4.bp.blogspot.com/-JYy12gWE-d0/VA-k8-0IF5I/AAAAAAAABzE/Fp-0WhN1unw/s1600/strukture.png)

1. **Folder Application**, merupakan folder tempat meletakkan file-file project yang akan dibangun
2. **Folder System**, merupakan folder yang berisi core, library, helper dari CodeIgniter
3. **Folder User_guide**, merupakan folder yang berisi petunjuk penggunaan CodeIgniter
4. **File index.html**, merupakan gerbang utama untuk masuk dan mengakses segala resource pada aplikasi CodeIgniter

![Struktur](http://2.bp.blogspot.com/-Bf-CUskqvbo/VA-qGqgJm_I/AAAAAAAABzU/dav_HAaTY6I/s1600/appflowchart.gif)

1. **Folder Config**, berisi konfigurasi yang akan digunakan nantinya, seperti setting database, session, autoload.
2. **Folder Controllers**, berisi modul-modul yang akan dibuat. Secara default akan ada sebuah file modul yaitu welcome.php. Modul tersebut dapat dipanggil dengan menuliskan http://localhost/codeigniter/index.php/welcome pada URL browser.
3. **Folder Models**, berfungsi untuk mengani semua fungsi yang berhubungan dengan manipulasi database.
4. **Folder Views**, berfungsi untuk menangani bagian tampilan pada aplikasi yang dibangun dengan CodeIgniter.

## Penggunaan CodeIgniter
*	Download CodeIgniter pada https://www.codeigniter.com/. Pengguna juga membutuhkan Text Editor dan XAMPP/WAMP.
*	Ekstrak hasil download dan letakkan pada direktori XAMPP/WAMP.
*	Tuliskan “localhost/CodeIgniter” pada URL Browser, apabila mucul tampilan “Welcome to CodeIgniter” maka framework CodeIgniter sudah berhasil dijalankan.
*	Ubah kode pada folder tersebut sesuai dengan keinginan pengguna. Pengguna dapat mempelajari CodeIgniter pada situs http://www.codeigniter.com/user_guide/.
