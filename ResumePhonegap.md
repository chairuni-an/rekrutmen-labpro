# Resume Framework Phonegap

PhoneGap adalah framework open source untuk membuat aplikasi untuk berbagai macam platform seperti Android , Blackberry , Iphone atau Windows Phone menggunakan HTML5 , JQUERY , JQUERY MOBILE , DAN CSS3. Biasanya untuk bahaha pemrograman untuk setiap platform yang berbeda, misalkan Android dan Iphone, kita harus menggunakan framework dan bahasa pemrograman yang berbeda, namun dengan Phonegap menggunakan bahasa standar untuk membuat aplikasi pada smartphone, jadi satu kali koding dapat digunakan untuk semua platform.
##### Kelebihan :
* Multi-platform : IoS, Blackberry, Android, WebOS, Symbian, dan Windows Phone
* Hanya menggunakan bahasa HTML, javascript, dan CSS
* Bersifat open source, shingga module yang ada akan terus dikembangkan oleh banyaknya developer.
##### Kekurangan :
* Reverse-engineering : banyaknya aplikasi yang dapat digunakan untuk code javascript sehingga memungkinkan dilakukannya pengeditan terhadap code aslinya.
* Adanya beberapa fitur telepon yang tidak didukung oleh phonegap.
* Karena multiplatform, phonegap sering ketinggalan ketika ada fitur baru pada platform aslinya.
* Tampilan yang ada terlihat sama untuk semua platform, dan tampilan terkadang tidak terlihat seperti mobile app.
* Walau menghasilkan aplikasi yang bersifat “build once, run everywhere” tetap saja aplikasi yang dibangun tidak seoptimal aplikasi buatan native SDK asli.
* Alasannya dikarenakan aplikasi phonegap perlu menginterpret kode javascript agar bisa diterima native SDK sehingga membutuhkan waktu lebih untuk menjalankannya.

##### Struktur :
Di bawah ini adalah struktur dari Phonegap.
![alt text](http://mkhuda.com/wp-content/uploads/2013/05/Phonegap-Bekerja.png)
Aplikasi yang dibangun menggunakan Phonegap sebenarnya adalah sebuah aplikasi Hybrid. Maksudnya aplikasi ini tidak murni berbasis HTML / Javascript, juga tidak murni berbasis Native Programming Language. Bagian dari aplikasi terutama User Interface (Tampilan), logika aplikasi dan komunikasi data atau server didasarkan pada HTML / Javascript. Sedangkan bagian lain dari aplikasi yang bertugas untuk mengkomunikasikan dan mengontrol fitur-fitur aplikasi tetap berdasarkan pada bahasa Native.

##### Penggunaan :
Untuk menggunakan Phonegap, tahap awal yang dilakukan adalah melakukan instalasi PhoneGap. Cara yang dapat dilakukan adalah dengan menggunakan perintah npm.
* npm install -g phonegap (ketik pada command promp)

Setelah proses instalasi selesai maka langkah selanjutnya adalah membuat area kerja.
* Pilih direktori yang akan digunakan untuk membuat aplikasi mobile dengan  PhoneGap
* Kemudian ketikan “phonegap create my-app”
* Masuk kedalam direktori yang telah dibuat oleh PhoneGap dengan mengetikkan “cd my-app”
contoh :
![alt text](http://i1.wp.com/www.onestringlab.com/wp-content/uploads/2015/10/phonegapInstall2.png)

Setelah masuk direktori, lakukan pemrograman dengan phonegap.