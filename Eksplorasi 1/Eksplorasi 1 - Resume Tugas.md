# Tugas Eksplorasi 1 - Resume Native

### Pengertian

Native Code adalah sebuah kode yang hanya dapat dijalankan dalam suatu *processor* tertentu / spesifik. 
Native Code merupakan kode yang bersifat low-level / paling rendah dalam suatu sistem. Suatu kode akan dikompile menjadi native code terlebih dahulu sebelum dijalankan pada suatu prosesor. Dengan kata lain, native code merupakan suatu *machine code* yang dapat langsung dijalankan pada suatu prosesor tertentu. 

Untuk menjalankan suatu native code pada prosesor selain yang seharusnya, pertama-tama harus membuka / menjalankan *emulator* sistem operasi tersebut terlebih dahulu, baru *code* tersebut dapat dijalankan melalui *emulator* tersebut. Akan tetapi, jika menjalankan melalui emulator, maka kode tersebut akan berjalan lebih lambat karena berbeda prosesor. 

### Kelebihan
Tidak memerlukan banyak versi (hanya satu prosesor tertentu saja, jadi bisa lebih mendalam dan lebih men*detail*; dan saat membuat versi, tidak perlu merubah semua karena hanya spesifik ke satu jenis prosesor. Selain itu, karena lebih mendalam, maka tampilannya juga dapat menjadi jauh lebih bagus dibandingkan dengan program yang dapat jalan di prosesor yang banyak (bisa ada GUI yang tidak cocok, dan menjadi tidak menarik). Selain itu, karena langsung dijalankan di prosesor, maka native code jauh lebih cepat dibandingkan dengan yang memerlukan perantara.

### Kekurangan
Karena hanya 1 jenis prosesor saja yang dispesifik-kan, maka tidak dapat dijalankan di prosesor yang tidak cocok secara langsung. Akibatnya harus memiliki *emulator* untuk menjalankannya, dan terkadang menjalankan di emulator bisa lebih lambat dan terkadang tampilannya ada yang berubah (karena emulator tersebut).

### Struktur
Native Code tidak terbatas pada suatu bahasa pemrograman, sehingga struktur kodenya bisa dilihat secara langsung, seperti bahasa C dan C++, akan dikompile menjadi native code secara langsung. Struktur native code sendiri dapat dilihat seperti machine code, salah satunya seperti:

	int _tmain(int argc, _TCHAR* argv[])
	{
		00401010 55               push        ebp  
		00401011 8B EC            mov         ebp,esp 
    			printf("Hello world");
		00401013 68 6C 6C 45 00   push        offset ___xt_z+128h (456C6Ch) 
		00401018 E8 13 00 00 00   call        printf (401030h) 
		0040101D 83 C4 04         add         esp,4 
    		return 0;
		00401020 33 C0            xor         eax,eax 
	}
		00401022 5D               pop         ebp  
		00401023 C3               ret  

kode sumber diambil dari http://stackoverflow.com/questions/3434202/what-is-the-difference-between-native-code-machine-code-and-assembly-code

### Aplikasi
Native Application dapat ditemukan di banyak tempat. Salah satunya adalah mainan *gameboy* yang hanya dapat dijalankan di platform gameboy. Jika ingin menjalankannya di komputer, maka harus ada emulator terlebih dahulu baru dapat dijalankan seluruhnya.
