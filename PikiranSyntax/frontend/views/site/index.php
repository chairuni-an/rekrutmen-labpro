<?php

/* @var $this yii\web\View */

use yii\widgets\ListView;
$this->title = Yii::$app->name;

?>

<?= ListView::widget([
	'dataProvider' => $dataProviderArtikel,
	'layout' => "{items}\n{pager}",
	'itemOptions' => ['class' => 'item'],
	'itemView' => '_itemArtikel'
]) ?>