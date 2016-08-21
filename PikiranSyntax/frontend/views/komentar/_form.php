<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model common\models\Komentar */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="artikel-form">
	<div class="panel panel-info">
		<div class="panel-heading">
			<h4>
				<?= $this->title ?>
				<span class="pull-right">
					<?= Html::a('Kembali', ['/site/view', 'id' => $model->id_artikel], ['class' => 'btn btn-danger btn-sm']) ?>
				</span>
			</h4>
		</div>
		
		<div class="panel-body">
			<?php $form = ActiveForm::begin([
				'options' => [
					'class' => 'col-md-12'
				]
			]); ?>
			
			<?= $form->field($model, 'isi_komentar')->textarea(['rows' => 6]) ?>
			
			<div class="form group">
				<?= Html::submitButton(Yii::t('app', 'Update'), ['class' => 'btn btn-primary']) ?>
			</div>
			
			<?php ActiveForm::end(); ?>	
		</div>
	</div>
</div>