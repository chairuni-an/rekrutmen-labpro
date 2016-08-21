<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/* @var $this yii\web\View */
/* @var $model common\models\Komentar */

$this->title = $model->id_komentar;
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Komentars'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="komentar-view">

    <h1><?= Html::encode($this->title) ?></h1>

    <p>
        <?= Html::a(Yii::t('app', 'Update'), ['update', 'id' => $model->id_komentar], ['class' => 'btn btn-primary']) ?>
        <?= Html::a(Yii::t('app', 'Delete'), ['delete', 'id' => $model->id_komentar], [
            'class' => 'btn btn-danger',
            'data' => [
                'confirm' => Yii::t('app', 'Are you sure you want to delete this item?'),
                'method' => 'post',
            ],
        ]) ?>
    </p>

    <?= DetailView::widget([
        'model' => $model,
        'attributes' => [
            'id_komentar',
            'id_artikel',
            'id_user',
            'isi_komentar:ntext',
            'create_time:datetime',
        ],
    ]) ?>

</div>
