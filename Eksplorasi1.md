# Rekrutmen Asisten Lab Programming Angkatan 2014

## Eksplorasi 1
### 1. Nama Framework
**[XNA]**

### 2. Filosofi
XNA adalah sebuah _framework_ yang disediakan oleh Microsoft untuk pembuatan game. XNA menggunakan bahasa C# dalam penggunaannya, biasanya sering di-_run_ dengan menggunakan Visual Studio 2010. Karena menggunakan bahasa C#, maka program yang dibuat dengan menggunakan CAN ini dapat berjalan di Windows dan Xbx 360 (pada versi 4 ada Zune). XNA sudah tidak dikembangkan lagi sejak versi 4 nya dirilis, XNA Game Studio 4 dirilis pada tahun 2010 [1].
Ada dua tujuan  pembuatan framework XNA, yaitu [2]:
  *	Memungkinkan Pembuatan Game yang _cross-platform_
  _Cross-platform_ yang dimaksud adalah framework XNA  yang dapat berjalan di Windows dan Xbox 360 [2].  
  
  *	Memudahkan Proses Pembuatan Game


### 3. Kelebihan
Berikut adalah beberapa kelebihan dari penggunaan XNA [5]:
  *	Ada template projek, untuk memudahkan dalam memulai pengembangan game
  *	_Game engine/state machine_ dasar sudah dituliskan
  *	_Cross-platform_, sehingga bisa digunakan di Xbox
  *	Dapat menggunakan Visual Studio untuk memudahkan _debugging_

### 4. Kekurangan
Kekurangan utama dari _framework_ dibandingkan dengan _development kit_ yang sebenarnya adalah tidak memiliki akses _low-level_ ke mesin. Berikut adalah penjabarannya [3]: 
  *	Tidak dapat melakukan manajemen memori secara manual. 
  *	Harus mengerjakan .NET _garbage collector_.
  *	Tidak dapat mengakses Xenon _vector unit_.

### 5. Struktur
Struktur yang dibahas di sini akan lebih membahas soal Layers. Layer pada XNS _framework_ terdiri dari [2]:
  *	Platform
  Ini adalah layer terendah yang terdiri dari _low-level native_ dan _managed_ API. API yang termasuk dalam layer ini adlaah Direct3D 9, XACT, XInput, dan XContent.
  
  *	Core Framework
  Ini adalah layer pertama yang menyediakan fungsionalitas yang diturunkan ke layer lain. Layer ini digunakan untuk mengasosiasi sesuatu dengan Managed DirectX. Fungsionalitas yang ada dikelompokkan menjadi Grafik, Audio, Input, Matematika, dan penyimpanan. Untuk menambah fungsionalitas, kita bisa menambahkan di layer ini untuk menambahkan fungsionalitasnya
  
  *	Extended Framework
  Layer ini terdiri dari dua komponen yaitu Application Model dan Content Pipeline. Layer ini dikembangkan untuk memudahkan penulisan kode game.
  
  *	Games
  Ini adalah layer tertinggi di XNA, yang terdiri dari kode game dan isinya. Terdapat juga di layer ini Starter Kit, template, dan komponen game.


### 6. Penggunaan      :
Seperti yang sudah dituliskan, XNA digunakan untuk pengembangan game. Berikut adalah beberapa contoh game yang dikembangkan dengan menggunakan _framework_ XNA [5]:
  *	Akane the Kunoichi (Windows, Xbox 360, Windows Phone, iOS)
  *	Aliens vs Romans (Xbox 360)
  *	Bleed (Windows, OS X, Xbox 360)
  *	Bloodline Champions (Windows)
  *	Crackdown 2: Project Sunburst (Windows Phone)
  * dll


### 7. Sumber
[1] http://www.c-sharpcorner.com/blogs/what-is-microsoft-xna-framework1
[2]	https://blogs.msdn.microsoft.com/xna/2006/08/25/what-is-the-xna-framework/
[3]	http://www.gamedev.net/topic/495299-disadvantages-using-xna/
[4]	https://en.wikipedia.org/wiki/Microsoft_XNA
[5]	https://social.msdn.microsoft.com/Forums/en-US/afd12b1b-eaa6-4ee6-aedc-938b6d9d09ed/benefits-of-xna-game-studio?forum=xnagamestudioexpress 

[//] Oleh : Martino Christanto Khuangga/13514084
