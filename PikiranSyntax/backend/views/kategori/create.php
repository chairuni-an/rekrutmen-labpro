<?php

use yii\helpers\Html;


/* @var $this yii\web\View */
/* @var $model common\models\Kategori */

$this->title = Yii::t('app', 'Tambah Kategori');
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Kategori'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="kategori-create">

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
