<?php

use yii\helpers\Html;


/* @var $this yii\web\View */
/* @var $model common\models\Artikel */

$this->title = Yii::t('app', 'Create Artikel');
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Artikels'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="artikel-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
