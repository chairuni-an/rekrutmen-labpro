#LOVE

LOVE adalah 2D game engine atau framwork. Framework ini membuat game dengan cara coding.
Framework ini menggunakan interface bahasa pemrograman Lua untuk mempermudah penggunaan.
Jadi intinya LOVE adalah engine yang menjalankan coding program berbahasa Lua.

##Kelebihan
- Free opensource, dapat dikomersilkan secara bebas dan tanpa batas.
- Bekerja pada Windows, Linux, Android, iOS, Mac OS X.
- Mudah untuk dibuat, bahasa simpel dan mudah dimengerti.
- Terdapat forum untuk sharing pengalaman dan pertanyaan.
- Bisa multi-language(C,C++ yang baru saya tau) asal memiliki dan memasang library tambahan yang dibutuhkan

##Kekurangan
- Semua API sudah fix tidak bisa diubah2 (ada batasan dalam pembuatan game).
- Tidak bisa multi-line comment
- API bawaan sangat banyak, namun dapat teratasi karena terdapat list API dan kegunaan pada web love.
- Untuk bahasa c++ harus membuat library sendiri

##Struktur
Untuk menjalankan game dibutuhkan:
- main.lua 
- LOVE app
Namun kadang diperlukan file lain:
- conf.lua (file configurasi game menggantikan love.conf)
- file lain yang mengandung kode atau interface game (misal foto, music, video)

Dalam file main.lua terdapat 3 fungsi inti
- love.load : fungsi ini berjalan ketika game baru dijalankan, biasanya untuk inisialisasi suatu objek yg menggunakan file eksternal (misal gambar)
- love.update : fungsi ini berfungsi untuk mengupdate keberjalanan program seiring berjalannya waktu, satuan dilalukannya update ialah perdetik namun dengan prosesor saat ini estimasi sekitar per 0.01 detik
- love.draw : fungsi ini berfungsi untuk menggambarkan segala objek tiap satuan waktu yang sama dengan update
- love.conf (opsional biasanya ditulis dalam file terpisah conf.lua) : merupakan fungsi yang mengatur konfigurasi dasar seperti ukuran window, resizable dll

##Penggunaan
Windows
Cara 1
- Buat folder
- Buat file dengan nama main.lua di dalam folder
- Masukkan/drag ke love.exe

Cara 2
- Atur path agar mengenali love.exe
- Step cara 1
- Zip lalu ubah extension menjadi .love
- Jalankan game hanya dengan double click

Cara 3
- Sama seperti cara 1 atau 2 hanya saja lewat command prompt
Contoh :
"C:\Program Files\LOVE\love.exe" "C:\games\mygame"
"C:\Program Files\LOVE\love.exe" "C:\games\packagedgame.love"
- Untuk attach console
"C:\Program Files\LOVE\love.exe" --console

Linux
- Melalui terminal
love /home/path/to/gamedir/
love /home/path/to/packagedgame.love
- Bisa juga doble click apabila sudah menginstall love system-wide (cara 2 windows)

Mac OS X
- Gunakan Mac Terminal
open -n -a love "~/path/to/mygame"
