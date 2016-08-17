# TUGAS EKSPLORASI CALON ASISTEN LABORATORIUM PEMROGRAMAN 2016

#### Omo Comunity
Dipersiapkan oleh:</br>
Kristianto Karim</br>
13514075</br>

![](https://rianadrianto.files.wordpress.com/2008/05/logo_itb.jpg?w=147)

Sekolah Teknik Elektro dan Informatika</br>
Institut Teknologi Bandung</br>
Jl. Ganesha No. 10, Bandung 40132</br>

#### Latar Belakang Masalah
Banyak mahasiswa IF maupun STI mengalami kesulitan disaat awal –  awal perkuliahan jurusan. Kesulitan tersebut bisa berupa kesulitan akademik, kesulitan organisasi dan kesulitan lainnya. Hal tersebut disebabkan kurang adanya suatu medium yang berfungsi sebagai wadah bagi mahasiswa IF dan STI untuk bertanya ataupun berbagi informasi.

#### Deskripsi Perangkat Lunak
Omo Community sebagai sebuah forum bagi mahasiswa IF dan STI untuk bertanya dan berbagi informasi. Pengguna dapat melihat thread – thread yang telah ada dan juga membuat post atau thread baru. Thread adalah seperti sebuah topik yang dibahas dan setiap thread terdiri dari  satu atau banyak post.

#### Framework / Library
Framework : Ruby on Rails – sebagai back-end web</br>
Gem, library, framework lain yang digunakan :</br>
1.	MySQL : sebagai database</br>
2.	Front-end web : HTML, Javascript, CSS, dll</br>
3.	Gem standar untuk aplikasi web :
*	sass-rails -> untuk menggunakan stylesheet</br>
*	uglifier -> untuk mengcompress javascript</br>
*	coffee-rails -> untuk mendukung coffee-script</br>
*	jquery-rails -> untuk mendukung jquery</br>
*	turbolinks -> untuk mempercepat navigasi aplikasi web</br>
*	jbuilder -> menghasilkan JSON</br>
*	byebug -> debugger untuk ruby</br>
*	web-console -> debugger untuk rails</br>
*	spring -> preloader untuk rails. Spring mempercepat dengan membiarkan aplikasi berjalan dibackground sehingga sewaktu developer menjalankan test, rake atau migration menjadi lebih cepat</br>


#### Fungsionalitas Utama
**Kebutuhan Pengguna :** </br>
1.	Pengguna dapat mendaftarkan diri </br>
2.	Pengguna dapat masuk ke akun mereka</br>
3.	Pengguna dapat membaca thread yang ada</br>
4.	Pengguna dapat membuat post atau thread baru</br>
5.	Pengguna dapat melakukan perubahan pada profil mereka</br>
6.	Pengguna dapat melakukan *upvote* / *like* pada *post* lain</br>
7.	Pengguna dapat mengubah dan menghapus *post* / *thread* yang telah dibuat oleh pengguna itu</br></br>
**Kebutuhan sistem :** </br>

|No.|	Kebutuhan|	Penjelasan|
|---|------------|----------------|
|1.|Sistem menyediakan fasilitas berupa *form* untuk mendaftarkan pengguna ke dalam basis data|	Pengguna harus memasukan *username*, kata sandi, konfirmasi kata sandi, alamat surat elektronik,dan NIM. Kemudian menyimpannya ke dalam basis data|
|2.|	Sistem menyediakan fasilitas *log* - *in*|	Sistem akan memeriksa basis data untuk mencocokan *username* dan kata sandi yang dimasukan pengguna|
|3.|	Sistem menampilkan *thread*|	Sistem menampilkan *thread* yang dipilih oleh pengguna|
|4.|	Sistem menyediakan *form* bagi pengguna untuk membuat *post* baru dalam sebuah *thread*|	Pengguna akan memasukan apa yang ingin di-*post* ke dalam *form*. Sistem akan membuat *post* baru yang menyimpan tanggal *post*, siapa yang melakukan *post*, jumlah *upvote* (*post* baru memiliki jumlah *upvote* sebanyak 0) dan isi *post*.|
|5.|	Sistem menyediakan *form* bagi pengguna untuk membuat *thread* baru.|	Pengguna akan memasukan apa yang ingin di-post ke dalam *form* dan judul dari *thread*. Sistem akan membuat *post* baru yang menyimpan tanggal *post*, siapa yang membuat *thread* dan isi *post*.|
|6.| 	Sistem membutuhkan data pengguna untuk membuat *thread* baru dan untuk *upvote*|Pengguna harus *log* - *in* ke akun mereka dengan memasukan *username* dan password|
|7.| Sistem hanya mengizinkan *post* / *thread* diubah atau dihapus oleh pembuat *post* / *thread*| Pengguna tidak dapat menghapus *post* / *thread* pengguna lain.|
|8.| Sistem menyediakan fasilitas pencarian *thread* | Pengguna dapat melakukan pencarian *thread* yang diinginkan berdasarkan kata kunci.|
|9.| Sistem menyediakan fasilitas *upvote post*| Pengguna dapat meng-*upvote* sebuah *post* |
|10.|Sistem menyediakan fasilitas *lock thread* | Pembuat *thread* dapat melakukan *lock thread* untuk mencegah pengguna lain menambah *post* pada *thread*.|
|11.| Sistem membutuhkan data pengguna untuk membuat *post* pada suatu *thread* yang tidak di-*lock* | Pengguna harus *log* - *in* ke akun mereka dengan memasukan *username* dan password|




