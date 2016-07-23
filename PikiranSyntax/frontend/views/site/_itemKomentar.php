<?php

use yii\helpers\Html;

?>

<div class="panel panel-success">
	<div class="panel-heading">
		<?= $model->idUser->username ?>
		&nbsp; | &nbsp;
		<?= date('d-m-Y', $model->create_time) ?>
		<?php if (\Yii::$app->user->can('updatePost', ['post' => $model->idUser])) {
			echo "&nbsp";
			echo Html::a('', ['/komentar/update', 'id' => $model->id_komentar], ['class' => 'glyphicon glyphicon-pencil', 'title' => Yii::t('app', 'Edit'),]); 
			echo "&nbsp";
			echo Html::a('', ['/komentar/delete', 'id' => $model->id_komentar], ['class' => 'glyphicon glyphicon-trash', 'title' => Yii::t('app', 'Hapus'),
									'data-confirm' => Yii::t('app', 'Are you sure to delete this item?'),
									'data-method' => 'post',]);
		} ?>
	</div>
	<div class="panel-body">
		<?= Html::encode($model->isi_komentar) ?>
	</div>
</div>