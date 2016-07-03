<?php

use yii\helpers\Html;

?>

<div class="panel panel-success">
	<div class="panel-heading"><?= $model->idUser->username ?></div>
	<div class="panel-body">
		<?= Html::encode($model->isi_komentar) ?>
	</div>
</div>