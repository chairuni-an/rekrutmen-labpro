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

2.3 moment.js, react.js, react-dom.js, babel-cli.js
Library yang dipake (gagal pake npm dan webpack, ntaran deh)

2.4 style.less, style.css
File LESSCSS beserta hasil compile-annya. masih gagal euy

3. Cara pakai
buka Aum.html di firefox (pake Chrome ga bisa, diminta bikin server.)