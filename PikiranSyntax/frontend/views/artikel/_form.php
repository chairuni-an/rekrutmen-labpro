<?php

use yii\helpers\Html;
use yii\helpers\ArrayHelper;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model common\models\Artikel */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="artikel-form">
	<div class="panel panel-info">
		<div class="panel-heading">
			<h4>
				<?= $this->title ?>
				<span class="pull-right">
					<?= Html::a('Kembali', ['/'], ['class' => 'btn btn-danger btn-sm']) ?>
				</span>
			</h4>
		</div>
		
		<div class="panel-body">
			<?php $form = ActiveForm::begin([
				'options' => [
					'class' => 'col-md-12'
				]
			]); ?>
			
			<?= $form->field($model, 'judul')->textInput(['maxlength' => true]) ?>
			
			<?= $form->field($model, 'isi_artikel')->textarea(['rows' => 6]) ?>
			
			<?= $form->field($model, 'id_kategori')->dropDownList(
				ArrayHelper::map(common\models\Kategori::find()->all(), 'id_kategori', 'nama_kategori')
			) ?>
			
			<div class="form group">
				<?= Html::submitButton($model->isNewRecord ? Yii::t('app', 'Create') : Yii::t('app', 'Update'), ['class' => $model->isNewRecord ? 'btn btn-success' : 'btn btn-primary']) ?>
			</div>
			
			<?php ActiveForm::end(); ?>	
		</div>
	</div>
</div>
