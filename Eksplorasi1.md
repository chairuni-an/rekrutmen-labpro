# ReactJS

ReactJS (React) adalah pustaka JavaScript untuk membuat antarmuka kelas atas yang hanya mengurusi semua hal yang berkaitan dengan tampilan dan logika di sekitarnya. Jika dilihat dari arsitektur pengimplementasian antarmuka pengguna, maka React dapat dikatakan sebagai komponen V (*view*) dalam MVC. 

Tujuan dibangunnya ReactJS adalah untuk menyelesaikan satu masalah pokok: **membangun aplikasi berskala besar dengan data yang selalu berganti seiring waktu**.  ReactJS hanya mengurusi UI dan sekitarnya, artinya dia tak menentukan bagaimana merancang *bussiness model*, struktur aplikasi dan lain sebagainya. Dengan model seperti ini, *programmer* tak perlu khawatir jika di struktur aplikasi ada banyak kustomisasi yang dilakukan. 

ReactJS dikelola oleh Facebook, Instagram dan komunitas pengembang (individu dan perusahaan). Saat ini ReactJS sudah digunakan pada *homepage* Netflix, Imgur, Bleacher Report, Feedly, Airbnb, SeatGeek, HelloSign, dan lain-lain.

## One way data flow
Aliran data dalam ReactJS hanya berjalan satu arah yaitu dari atas ke bawah. Sedangkan permintaan/aksi (*event*) berjalan dari bawah ke atas. Dengan begitu, untuk merasionalisasi bagaimana aplikasi berjalan, kita cukup memeriksa data yang berkeliaran karena data sebagai sumber kebenaran hanya berasal dari komponen paling atas.

## JSX
JSX adalah ekstensi JavaScript yang memungkinkan menulis sintaks mirip XML di dalam kode JavaScript. Jadi meskipun mirip HTML, pada akhirnya, JSX akan diubah ke JavaScript sebelum diproses.

## Virtual DOM
*Virtual DOM* adalah representasi DOM secara virtual. ReactJS menggunakan *virtual DOM* untuk mempercepat kecepatan JavaScript dalam mengolah DOM. ReactJS melakukan semua operasi di dalam *virtual DOM* dan setelah operasi tersebut selesai, ReactJS menulis perubahan tersebut di DOM.

Proses di ReactJS jika ada perubahan suatu elemen di dalam DOM:
1.	ReactJS sudah mempunyai representasi dari DOM di *virtual DOM*.
2.	ReactJS menerima representasi DOM yang berisi perubahan.
3.	ReactJS membandingkan perbedaan kedua representasi lama dan baru.
4.	Hasil dari perbandingan tersebut dimasukkan ke antrian.
5.	Terakhir ReactJS akan me-*render* ulang *patch* tersebut ke DOM

## Kelebihan
1. Hanya mengurus UI (*user interface*) sehingga tidak perlu banyak konfigurasi jika banyak program yang diganti pada aplikasinya.
2. Menggunakan *virtual DOM* yang mempercepat JavaScript

## Kekurangan
1. Dokumentasi ReactJS kurang jelas dan perlu dibaca satu per satu untuk memahami ReactJS secara menyeluruh.
2. ReactJS bukan *framework*, hanya pustaka yang mengurusi UI (merupakan kelebihan sekaligus kekurangan), sehingga item-item berikut harus diimplementasikan sendiri:
* router,
* data layer,
* struktur aplikasi,
* AJAX,
* event system kecuali event DOM.
