# Rekrutmen Asisten Lab Programming Angkatan 2014

## Garis Besar Tugas
Silahkan ubah readme ini untuk mendeskripsikan pekerjaan Anda. Cantumkan deskripsi tugas dan lokasi file-file yang Anda tambahkan di sini. Anda dapat menggunakan tool online http://dillinger.io/ serta cheatsheet https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet untuk mengubah readme ini. Mulai dari submission pertama, silahkan hapus deskripsi ini.

## Eksplorasi Ruby On Rails
* Rilis: 3 Mei 2016
* Deadline: 22 Mei 2016
* Deliverables: Resume Ruby On Rails

# RUBY ON RAILS
##### 1. APA ITU RUBY ?
[Ruby](https://www.ruby-lang.org/en/) adalah bahasa [pemograman berorientasi objek](https://en.wikipedia.org/wiki/Object-oriented_programming) yang dibuat oleh Yukihiro Matsumoto. Ruby dapat dijalankan dalam berbagai jenis sistem operasi seperti Windows, Linux dan Mac OS. Selain berparadigma *object-oriented*, Ruby juga berparadigma pemogramanan fungsional.\
Ruby memiliki suatu karakteristik unik yaitu :
>"Everything you manipulate is an object, and the results of those manipulations are themselves objects"

Jadi, pada ruby variabel yang didefinisikan akan otomatis diubah menjadi objek sesuai dengan nilai yang di-*assign* pada variabel tersebut. Contoh :
```ruby
car = "hakuna matata" #Variabel "car" menjadi objek dari kelas string 
```
Bahasa pemograman Ruby juga adalah sebuah bahasa pemograman yang sangat bahasanya *user-friendly* karena bahasanya sangat mendekati bahasa manusia. Contoh :
```ruby
5.times { print "hakuna matata" } #Akan mencetak "hakuna matata" sebanyak 5 kali
```
##### 2. APA ITU RUBY ON RAILS ?
[Ruby on Rails](http://rubyonrails.org/) adalah web framework yang dibuat dengan bahasa pemograman Ruby. Rails pertama sekali dikembangkan oleh [David Heinemeier Hansson](https://en.wikipedia.org/wiki/David_Heinemeier_Hansson) secara open-source dengan [lisensi MIT](https://en.wikipedia.org/wiki/MIT_License).

Rails dibuat dengan konsep [**M**odel **V**iew **C**ontroller](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) sehingga programmer yang menggunakan Rails mudah memanajemen programnya.  

##### 3. APA KELEBIHAN RUBY ON RAILS?
- __MVC__<br\> 
*Model-View-Controller* --- Penanganan untuk model data, tampilan antar muka serta pengontrol terpisah sehingga menjadi sangat dinamis. Oleh karena itu, diharapkan saat programmer mengubah antarmuka tidak akan mempengaruhi penanganan datanya. Demikian juga data dapat diatur kembali sewaktu-waktu tanpa mengubah antarmukanya.
- __DRY__<br\>
*Don't Repeat Yourself* --- adalah salah satu filosofi dari Rails yang menbuat rails menjadi web framework yang sangat efisien karena setiap informasi disimpan pada satu tempat yang tidak ambigu pada sistem sehingga tidak berulang-ulang.
- __COC__<br\>
*Convention over Configuration* --- Dengan prinsip ini programmer tidak perlu repot - repot untuk melakukan konfigurasi aplikasi seperti koneksi ke database, karena sudah ada mekanisme yang disediakan oleh rails.
- __Fat Model, Skinny Controllers__\
Bahwa logika dari aplikasi lebih didefinisikan pada model sehingga controller hanya tinggal menggunakan model tersebut.

##### 4. APA KEKURANGAN RUBY ON RAILS?
Pemograman dengan rails cukup sulit dimengerti karena bahasanya terlalu *direct*. Selain itu environment yang mendukung pemograman rails juga masih sangat minim. 

##### 5. STRUKTUR APLIKASI RUBY ON RAILS?
Rails memiliki template untuk pengembangan webnya dengan konsep MVC. Jika kita mengetikan :
```ruby
$ rails new webApps 
```
pada terminal, maka akan tercipta suatu direktori aplikasi dengan nama webApps dengan struktur sebagai berikut :


## Eksplorasi 2
* Rilis: 24 Mei 2016
* Deadline: 29 Mei 2016
* Deliverables: Source code dan dokumentasi program sederhana sesuai topik eksplorasi

Melakukan setup dan membuat program sederhana sesuai topik eksplorasi. Program sederhana yang dibuat minimal adalah semacam Hello World!, namun disarankan untuk membuat lebih dari itu demi kelancaran pembuatan rancangan proyek. Setup akan dinilai dari keberhasilan anda membuat Hello World!, sehingga tidak ada deliverable khusus. Untuk program sederhana, kumpulkan source code dan dokumentasi program saja, jangan mengumpulkan executablesnya (bisa menggunakan fitur gitignore). Pastikan dokumentasi Anda menjelaskan cara penggunaan dan screenshot-screenshot dari program sederhana yang Anda buat.

## Rancangan Proyek
* Rilis: 31 Mei 2016
* Deadline: 5 Juni 2016
* Deliverables: Dokumen rancangan proyek

Membuat rancangan proyek yang meliputi deskripsi singkat, platform, fitur minimal, asumsi, dan batasan implementasi. Template dokumen akan disampaikan pada waktu rilis tugas ini, dan mungkin agak sedikit berbeda dengan apa yang disampaikan pada file ini, gunakan yang ada di template saja nanti.

## Revisi Rancangan Proyek
* Rilis: 7 Juni 2016
* Deadline: 12 Juni 2016
* Deliverables: Revisi dokumen rancangan proyek

Pada tahap ini Anda sudah akan diassign pada asisten khusus untuk masing-masing peserta. Lakukanlah asistensi dengan asisten Anda untuk melakukan revisi ini.

## Checkpoint 1
* Rilis: 14 Juni 2016
* Deadline: 10 Juli 2016
* Deliverables: Source code dan screenshot dari aplikasi, serta progress report

Di akhir tahap ini, Anda sudah harus menyelesaikan sebagian dari aplikasi anda. Diwajibkan untuk melakukan asistensi minimal satu kali dengan asisten Anda, Commit tiap tahap pengerjaan Anda ke repository ini, dan tambahkan semacam mini dokumentasi aplikasi dengan mencantumkan screenshot-screenshot akhir aplikasi Anda. Buatlah progress report yang berisi apa yang sudah dikerjakan, kendala, dan rencana pengerjaan berikutnya. Progress report ini akan digunakan oleh asisten Anda untuk dibahas saat asistensi berikutnya. 

## Checkpoint 2
* Rilis: 12 Juli 2016
* Deadline: 7 Agustus 2016
* Deliverables: Source code dan screenshot dari aplikasi, serta progress report

Di akhir tahap ini, aplikasi Anda sudah harus hampir selesai. Pastikan bahwa hanya hal-hal minor yang belum selesai, misalnya polesan tampilan dan sedikit user experience. Setelah deadline checkpoint 2, asisten akan mengulas aplikasi Anda dan kemudian akan memberikan perbaikan-perbaikan sebelum versi final. Penting bagi Anda untuk melakukan perbaikan-perbaikan yang diminta karena dapat mempengaruhi penilaian akhir. Sama dengan checkpoint 1, Anda diwajibkan untuk melakukan asistensi dan mengumpulkan deliverables dengan format serupa dengan checkpoint 1.

## Pengumpulan
* Rilis: 9 Agustus 2016
* Deadline: 21 Agustus 2016
* Deliverables: Source code dan screenshot dari aplikasi, serta progress report

Ini adalah tahap pengumpulan akhir. Silahkan mengumpulkan deliverables dengan format serupa dengan checkpoint 1 dan 2. Setelah lewat deadline, Anda TIDAK DIPERKENANKAN untuk melakukan commit sedikitpun, sebagai pembatas bahwa proyek Anda sudah dikumpulkan. Jika untuk ke depannya Anda ingin mengembangkan aplikasi Anda kembali serta melakukan commit, diperkenankan untuk melakukannya setelah demo.

## Demo
* Pengumuman dan Pembagian: 23 Agustus 2016
* Demo: 27 Agustus 2016
* Wajib dibawa: Laptop pribadi, aplikasi yang sudah dibuild atau deploy (untuk yang bisa dideploy seperti Unity dan Android Native)

Siapkan diri, siapkan mental, ini adalah pengujian final. Tunjukkan yang terbaik dan buatlah kami terpukau.

Sekian, have a nice holiday dan selamat berjuang!!!
