<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model common\models\Artikel */

$this->title = Yii::t('app', 'Update {modelClass}', [
    'modelClass' => 'Artikel',
]);
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Artikels'), 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->id_artikel, 'url' => ['view', 'id' => $model->id_artikel]];
$this->params['breadcrumbs'][] = Yii::t('app', 'Update');
?>
<div class="artikel-update">

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
