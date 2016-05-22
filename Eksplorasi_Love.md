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
- conf.lua (file configurasi game menggantika love.conf)
- file lain yang mengandung kode atau interface game (misal foto, music, video)

##Penggunaan
Windows
Cara 1
- Buat folder
- Buat file dengan nama main.lua di dalam folder
- Masukkan ke LOVE.exe

Cara 2
- Atur path agar mengenali LOVE.exe
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
