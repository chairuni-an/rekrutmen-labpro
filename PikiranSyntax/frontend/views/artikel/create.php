<?php

use yii\helpers\Html;


/* @var $this yii\web\View */
/* @var $model common\models\Artikel */

$this->title = Yii::t('app', 'Tambah Artikel');
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Artikels'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="artikel-create">

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
