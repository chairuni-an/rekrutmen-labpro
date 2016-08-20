Hai, ini adalah dokumentasi untuk app yang ku buat.

1. Deskripsi Proyek
blablabla ntaran aja

2. File yang ada di proyek
2.1 Aum.html
File HTML untuk proyek ini. isinya cuman sebuah div yang bakal di otak atik sama file JS nya

2.2 Aum.js
File JavaScript yang isinya berbagai React Component. Minim dengan komentar, semua komponen masuk jadi 1 file, tapi harusnya ga bikin mabok kok.

2.2.1 App
React Component yang berfungsi sebagai wrapper seluruh komponen lain

2.2.2 Calendar
React Component yang berfunsi sebagai wrapper buat komponen komponen kalender.

2.2.3 DisplayMonth
React Component buat mendisplay bulan dan tahun tanggal yang ditampilkan beserta 2 buah tombol untuk navigasi.

2.2.4 DayNames
React Component yang isinya nama hari doang. 

2.2.5 DisplayDates
React Component buat merender tanggal-tanggal yang ada.

2.2.6 Table
React Component buat membaca database berdasarkan tanggal yang dipilih di kalender. 
Berhubung gagal otak atik node.js, database cuman pake JS Object doang (mirip JSON lah ya).

2.2.7 VisibleToggle
Isinya button yang kalo dipencet bakal toggle visibility dari childrennya.

2.2.8 OrderForm
Isinya Form buat order. klasik lah

2.2.9 Modal
Isinya modal nampilin pesan error. Sejauh ini baru ada 2 jenis pesan error : jam tabrakan atau ga ada atas nama. Next time mungkin nambah.

2.3 moment.js, react.js, react-dom.js, babel-cli.js, jquery-3.1.0.js, bootstrap.js
Library yang dipake (gagal pake npm dan webpack, ntaran deh)

2.4 style.less, style.css
File LESSCSS beserta hasil compile-annya. include bootstrap disini.

2.5 folder bootstrap
isinya source bootstrap versi LESS dan glyphicon. bootstrap dimodifikasi dikit.

3. Cara pakai
buka Aum.html di firefox (pake Chrome ga bisa, diminta bikin server.)

4. What's next?
4.1 Perbaikan tabel < DONE (20/8/2016)
4.2 styling < DONE (20/8/2016)
4.3 Form pemesanan < DONE (20/8/2016)
4.4 otak atik node, npm, dan webpack (kalo sempet) < ga sempet
4.5 otak atik pake database beneran (kalo sempet) < ga sempet