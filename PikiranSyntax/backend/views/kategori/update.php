<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model common\models\Kategori */

$this->title = Yii::t('app', 'Update Kategori');
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Kategori'), 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->nama_kategori, 'url' => ['index']];
$this->params['breadcrumbs'][] = Yii::t('app', 'Update');
?>
<div class="kategori-update">
    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
