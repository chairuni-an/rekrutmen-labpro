<?php

namespace frontend\models;

use Yii;
use yii\base\Model;
use common\models\User;

class PasswordForm extends Model {
	public $oldpass;
	public $newpass;
	public $repeatnewpass;
	
	public function rules() {
		return [
			[['oldpass','newpass','repeatnewpass'],'required'],
			['newpass', 'string', 'min' => 6],
			['oldpass','findPasswords'],
			['repeatnewpass','compare','compareAttribute'=>'newpass'],
		];
	}
	
	public function findPasswords($attribute, $params) {
		$user = User::find()->where([
				'username'=>Yii::$app->user->identity->username
			])->one();
		if(!$user->validatePassword($this->oldpass))
			$this->addError($attribute,'Incorrect password');
	}
	
	public function attributeLabels() {
		return [
			'oldpass'=>'Old Password',
			'newpass'=>'New Password',
			'repeatnewpass'=>'Repeat New Password'
		];
	}
}