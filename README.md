# Rekrutmen Asisten Lab Programming Angkatan 2014

### DATA DIRI
NAMA : KRISTIANTO KARIM</br>
NIM : 13514075</br>
FRAMEWORK : RUBY ON RAILS</br>

## Garis Besar Tugas
Tugas yang diberikan kepada saya yaitu untuk melakukan explorasi pada web framework "RUBY ON RAILS"
 
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
- __MVC__ 
*Model-View-Controller* --- Penanganan untuk model data, tampilan antar muka serta pengontrol terpisah sehingga menjadi sangat dinamis. Oleh karena itu, diharapkan saat programmer mengubah antarmuka tidak akan mempengaruhi penanganan datanya. Demikian juga data dapat diatur kembali sewaktu-waktu tanpa mengubah antarmukanya.
- __DRY__
*Don't Repeat Yourself* --- adalah salah satu filosofi dari Rails yang menbuat rails menjadi web framework yang sangat efisien karena setiap informasi disimpan pada satu tempat yang tidak ambigu pada sistem sehingga tidak berulang-ulang.
- __COC__
*Convention over Configuration* --- Dengan prinsip ini programmer tidak perlu repot - repot untuk melakukan konfigurasi aplikasi seperti koneksi ke database, karena sudah ada mekanisme yang disediakan oleh rails.
- __Fat Model, Skinny Controllers__
Bahwa logika dari aplikasi lebih didefinisikan pada model sehingga controller hanya tinggal menggunakan model tersebut.
 
##### 4. APA KEKURANGAN RUBY ON RAILS?
-Pemograman dengan rails cukup sulit dimengerti karena bahasanya terlalu *direct*. Selain itu environment yang mendukung pemograman rails juga masih sangat minim. 
 
##### 5. STRUKTUR APLIKASI RUBY ON RAILS?
Rails memiliki template untuk pengembangan webnya dengan konsep MVC. Jika kita mengetikan :
```ruby
$ rails new webApps 
```
pada terminal, maka akan tercipta suatu direktori aplikasi dengan nama webApps dengan struktur sebagai berikut :
<br>.
<br>├── app
<br>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── assets
<br>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── images
<br>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── javascripts
<br>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── stylesheets
<br>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── controllers
<br>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── concerns
<br>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── helpers
<br>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── mailers
<br>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── models
<br>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── concerns
<br>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── views
<br>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    └── layouts
<br>├── bin
<br>├── config
<br>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── environments
<br>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── initializers
<br>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── locales
<br>├── db
<br>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── migrate
<br>├── lib
<br>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── assets
<br>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── tasks
<br>├── log
<br>├── public
<br>├── test
<br>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── controllers
<br>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── fixtures
<br>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── helpers
<br>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── integration
<br>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── mailers
<br>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── models
<br>├── tmp
<br>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── cache
<br>│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── assets
<br>└── vendor
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── assets
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── javascripts
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── stylesheets
 
## Eksplorasi 2 Ruby On Rails
 * Rilis: 24 Mei 2016
 * Deadline: 29 Mei 2016
 * Deliverables: Source code dan dokumentasi program sederhana sesuai topik eksplorasi
 
Hello Iti adalah sebuah program web sederhana yang dibuat dengan rails. Hello Iti dapat menambah post yang kemudian akan disimpan dalam basis data mysql (bisa basis data lain seperti sqlite3, dll). Selain dapat menambah post, Hello Iti juga dapat menghapus post yang telah ada.</br>
Source Code dari program ada di dalam folder Iti-Blog.</br>
Dokumentasi dari program iti ada di dalam folder Dokumentasi.</br>

## Rancangan Proyek
* Rilis: 31 Mei 2016
* Deadline: 5 Juni 2016
* Deliverables: [Proposal Proyek - 13514075](https://github.com/kristiantokarim/rekrutmen-labpro/blob/master/Proposal%20Proyek%20-%2013514075%20-%20Kristianto%20Karim.docx)</br>
Rancangan proyek menggunakan ruby on rails. Proyek adalah aplikasi web berbentuk forum. Penjelasan lebih rinci dapat dilihat dalam dokumen proposal.

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

