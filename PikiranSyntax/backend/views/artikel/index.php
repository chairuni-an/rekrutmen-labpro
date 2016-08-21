<?php

use yii\helpers\Html;
use yii\grid\GridView;
use yii\widgets\Pjax;
/* @var $this yii\web\View */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = Yii::t('app', 'Artikel');
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="artikel-index panel panel-info">
	<div class="panel-heading">
		<h4><?= Html::encode($this->title) ?>
		<span class="pull-right">
			<?= Html::a(Yii::t('app', 'Tambah Artikel'), ['create'], ['class' => 'btn btn-primary btn-sm']) ?>
			<?= Html::a(Yii::t('app', 'User'), ['/user'], ['class' => 'btn btn-danger btn-sm']) ?>
			<?= Html::a(Yii::t('app', 'Kategori'), ['/kategori'], ['class' => 'btn btn-danger btn-sm']) ?>
		</span>
		</h4>
	</div>
	
	<div class="panel-body">
		<?php Pjax::begin(); ?> <?= GridView::widget([
			'dataProvider' => $dataProvider,
			'columns' => [
				['class' => 'yii\grid\SerialColumn'],
				'judul',
				'idKategori.nama_kategori',
				'jumlah_baca',
				'create_time:date',
				[
					'class' => 'yii\grid\ActionColumn',
					'template' => '{update} {delete}'
				],
			],
		]); ?>
		<?php Pjax::end(); ?>
	</div>
</div>