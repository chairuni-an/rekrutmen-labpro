<?php

use yii\helpers\Html;

?>

<div class="panel panel-success">
	<div class="panel-heading">
		<?= $model->idUser->username ?>
		&nbsp; | &nbsp;
		<?= date('d-m-Y', $model->create_time) ?>
	</div>
	<div class="panel-body">
		<?= Html::encode($model->isi_komentar) ?>
	</div>
</div>