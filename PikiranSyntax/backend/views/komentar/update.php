<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model common\models\Komentar */

$this->title = Yii::t('app', 'Update {modelClass}: ', [
    'modelClass' => 'Komentar',
]) . $model->id_komentar;
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Komentars'), 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->id_komentar, 'url' => ['view', 'id' => $model->id_komentar]];
$this->params['breadcrumbs'][] = Yii::t('app', 'Update');
?>
<div class="komentar-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
