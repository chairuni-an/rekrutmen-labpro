# Resume Yii

## Filosofi Framework
Yii adalah framework (kerangka kerja) PHP berbasis-komponen, berkinerja tinggi untuk pengembangan aplikasi Web berskala-besar. Yii menyediakan reusability maksimum dalam pemrograman Web dan mampu meningkatkan kecepatan pengembangan secara signifikan. Nama Yii (dieja sebagai /i:/) singkatan dari "Yes It Is!". Berikut merupakan respon yang paling tepat dan akurat untuk yang baru dengan Yii:

Apakah Yii cepat? ... Apakah Yii aman? ... Apakah Yii profesional? ... Apakah Yii cocok untuk projek saya berikutnya? ... Yes, it is!

## Kelebihan Framework
* Yii adalah salah satu framework yang sangat ringan dan dilengkapi dengan solusi caching yang memuaskan.
* Yii sangat cocok untuk pengembangan aplikasi dengan lalu lintas-tinggi, seperti portal, manajemen konten (CMS), sistem e-commerce, dll.
* Yii didokumentasikan dengan jelas, efisien, dan kaya-fitur.

## Kekurangan Framework
* Tidak kompatibel dengan PHP 4

## Struktur
Yii mengimplementasikan pola desain model-view-controller (MVC). Dalam MVC, model menggambarkan informasi (data) dan aturan bisnis; view(tampilan) berisi elemen antar muka pengguna seperti teks, input form; sementara controller mengatur komunikasi antar model dan view. Selain implementasi MVC, Yii juga memiliki entitas-entitas berikut :
* entry scripts: they are PHP scripts that are directly accessible by end users. They are responsible for starting a request handling cycle.
* applications: they are globally accessible objects that manage application components and coordinate them to fulfill requests.
* application components: they are objects registered with applications and provide various services for fulfilling requests.
* modules: they are self-contained packages that contain complete MVC by themselves. An application can be organized in terms of multiple modules.
* filters: they represent code that need to be invoked before and after the actual handling of each request by controllers.
* widgets: they are objects that can be embedded in views. They may contain controller logic and can be reused in different views.
Diagram berikut merupakan struktur statis dari aplikasi
![Static Structure](http://www.yiiframework.com/doc-2.0/images/application-structure.png)

## Request Lifecycle
Diagram berikut memperlihatkan bagaimana aplikasi menghandle request
![Request Lifecycle](http://www.yiiframework.com/doc-2.0/images/request-lifecycle.png)
1. Pengguna membuat request ke entry script web/index.php.
2. Entry script memuat konfigurasi aplikasi dan membuat instans aplikasi untuk menghandle request.
3. Aplikasi ini menyelesaikan rute yang diminta dengan bantuan komponen aplikasi permintaan.
4. Aplikasi membuat instans controller untuk menghandle permintaan.
5. Controller membuat instans action dan melakukan filter untuk action.
6. Jika filter gagal, aksi dibatalkan.
7. Jika filter lolos, aksi dilakukan.
8. Aksi memuat data model, yang mungkin saja dari database.
9. Aksi membuat view, yang dimunculkan dengan data model.
10. Hasil dikembalikan ke komponen aplikasi respon.
11. Komponen respon mengirimkan hasil yang diberikan ke browser pengguna.

## Penggunaan


###### References : 
* http://www.yiiframework.com/doc/guide/1.1/id/quickstart.what-is-yii
* http://cobadibacalagi.blogspot.co.id/2013/10/kelebihan-dan-kekurangan-beberapa-php.html
* http://wawan-kurniawan888.blogspot.co.id/2013/09/yii-framework.html
