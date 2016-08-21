<?php

use yii\helpers\Html;

?>

<div class="content">
	<div class="content-title">
		<?= Html::a($model->judul, ['view', 'id' => $model->id_artikel]) ?>
	</div>
	<div class="content-detail">
		Tanggal : <strong><?= date('d-m-Y', $model->create_time) ?></strong>
		&nbsp; | &nbsp;
		Oleh : <strong><?= $model->createBy->first_name .' '. $model->createBy->last_name ?></strong>
		&nbsp; | &nbsp;
		Komentar : <strong><?= count($model->komentars) ?></strong>
		&nbsp; | &nbsp;
		Dilihat : <strong><?= $model->jumlah_baca ?></strong>
		&nbsp; | &nbsp;
		Kategori : <strong><?= $model->idKategori->nama_kategori ?></strong>
	</div>
	<div class="content-fill">
		<p style="text-align: justify"><?= substr(strip_tags($model->isi_artikel), 0, 300) ?></p>
		<?= Html::a('Selengkapnya', ['view', 'id'=>$model->id_artikel], ['class' => 'btn btn-sm btn-primary']) ?>
	</div>
</div>