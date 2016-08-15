<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model common\models\User */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="user-form">
	<div class="panel panel-info">
		<div class="panel-heading">
			<h4>
				<?= $this->title ?>
				<span class="pull-right">
					<?= Html::a('Kembali', ['index'], ['class' => 'btn btn-danger btn-sm']) ?>
				</span>
			</h4>
		</div>


		<div class="panel-body">
			<?php $form = ActiveForm::begin([
				'options' => [
					'class' => 'col-md-12'
				]
			]); ?>
			
			<?= $form->field($model, 'username')->textInput() ?>

			<?= $form->field($model, 'first_name')->textInput() ?>

			<?= $form->field($model, 'last_name')->textInput() ?>

			<?= $form->field($model, 'email')->textInput() ?>
			
			<div class="form group">
				<?= Html::submitButton($model->isNewRecord ? Yii::t('app', 'Create') : Yii::t('app', 'Update'), ['class' => $model->isNewRecord ? 'btn btn-success' : 'btn btn-primary']) ?>
			</div>
			
			<?php ActiveForm::end(); ?>	
		</div>
	</div>
</div>
