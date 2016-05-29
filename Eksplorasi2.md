# Eksplorasi 2 ReactJS

ReactJS (React) adalah pustaka JavaScript untuk membuat antarmuka kelas atas yang hanya mengurusi semua hal yang berkaitan dengan tampilan dan logika di sekitarnya. Jika dilihat dari arsitektur pengimplementasian antarmuka pengguna, maka React dapat dikatakan sebagai komponen V (*view*) dalam MVC. 

Pada eksplorasi 2 ini, saya melakukan setup dan membuat program sederhana. Berikut tampilan program sederhana yang dibuat.

### Saat localhost:8080 diakses
![alt text](https://raw.githubusercontent.com/jessyjosephine/rekrutmen-labpro/master/pics/Screenshot%202016-05-29%2010.32.35.png "Sc 1")
Localhost mengakses index.html yang ada pada source code yang dilampirkan. Index.html kemudian mengakses Layout.js untuk menampilkan body yang diinginkan. Dalam Layout.js, ada Header dan Footer untuk membagi-bagi komponen body tersebut. Footer untuk program ini berupa "by Jessy Josephine 18214021", sedangkan headernya adalah "Type your title!" dan input textbox (akan dijelaskan di screenshot selanjutnya).

### Setelah 2 detik, tulisan "Welcome!" berubah
![alt text](https://raw.githubusercontent.com/jessyjosephine/rekrutmen-labpro/master/pics/Screenshot%202016-05-29%2010.32.36.png "Sc 2")
Perubahan tulisan ini disebabkan oleh state yang berubah. Dapat dilihat pada source code diatas, saat objek Layout dibuat, state name adalah "Welcome!". Tetapi pada method render(), ada suatu fungsi setTimeout yang mengganti state name menjadi "Welcome to Eksplorasi 2!" setelah 2000 milidetik.

### Mengubah Header sesuai input user
![alt text](https://raw.githubusercontent.com/jessyjosephine/rekrutmen-labpro/master/pics/Screenshot%202016-05-29%2011.00.15.png "Sc 3")
![alt text](https://raw.githubusercontent.com/jessyjosephine/rekrutmen-labpro/master/pics/Screenshot%202016-05-29%2011.00.29.png "Sc 4")
User dapat mengubah header sesuai kemauan user. Dalam gambar diatas, user mengetik "Hello World!" pada textbox dan headernya pun berubah mengikuti input user. Hal ini terjadi karena adanya fungsi changeTitle() pada Layout.js yang mengganti state title sesuai kemauan user.
![alt text](https://raw.githubusercontent.com/jessyjosephine/rekrutmen-labpro/master/pics/Screenshot%202016-05-29%2011.01.04.png "Sc 5")
Input user dibaca pada komponen Header.js pada gambar diatas. Nilai yang dimasukkan user merupakan state title yang baru yang ditangani oleh fungsi handleChange() yang memanggil fungsi changeTitle() pada Layout.