<?php

use yii\widgets\ActiveForm;
use yii\helpers\Html;
use yii\widgets\ListView;
$this->title = Yii::$app->name .' - '. $model->judul;

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
		<?= nl2br($model->isi_artikel) ?>
	</div>
</div>

<br />
<br />

<div class="panel panel-info">
	<div class="panel-heading">Komentar</div>
	<div class="panel-body">
		<?php $form = ActiveForm::begin([
			'options' => [
				'style' => 'font-size: 80%'
			]
		]); ?>
		
		<?= $form->field($komentarForm, 'id_artikel')->hiddenInput(['value' => $model->id_artikel])->label(false) ?>
		
		<?= $form->field($komentarForm, 'id_user')->hiddenInput(['value' => Yii::$app->user->id])->label(false) ?>
		
		<?= $form->field($komentarForm, 'isi_komentar')->textarea(['rows' => 6]) ?>
		
		<div class="form-group">
			<?= Html::submitButton('Kirim', ['class' => 'btn btn-success']) ?>
		</div>
		
		<?php ActiveForm::end(); ?>
	</div>
</div>

<hr />
<h3><i>Komentar</i></h3>

<?= ListView::widget([
	'dataProvider' => $dataProviderKomentar,
	'layout' => "{items}\n{pager}",
	'itemOptions' => ['class' => 'item'],
	'itemView' => '_itemKomentar'
]) ?>