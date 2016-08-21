<?php

use yii\helpers\Html;
use yii\bootstrap\ActiveForm;

$this->title = 'Change Password';
$this->params['breadcrumbs'][] = $this->title;
?>

<div class="site-changepassword">
	<div class="panel panel-info">
		<div class="panel-heading"><?= Html::encode($this->title)?></div>
		<div class="panel-body">
			<p>Please fill out the following fields to change password:</p>
			
			<?php $form = ActiveForm::begin(['id' => 'changepassword-form']); ?>
				
				<?= $form->field($model,'oldpass',['inputOptions'=>[
					'placeholder'=>'Old Password'
				]])->passwordInput() ?>
				
				<?= $form->field($model,'newpass',['inputOptions'=>[
					'placeholder'=>'New Password'
				]])->passwordInput() ?>
				
				<?= $form->field($model,'repeatnewpass',['inputOptions'=>[
					'placeholder'=>'Repeat New Password'
				]])->passwordInput() ?>

				<div class="form-group">
						<?= Html::submitButton('Change password',['class'=>'btn btn-primary']) ?>
				</div>

			<?php ActiveForm::end(); ?>	
		</div>
	</div>
</div>