<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/* @var $this yii\web\View */
/* @var $model common\models\User */

$this->title = "Profil " . $model->username;
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Users'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="user-view">

    <p>
		<?php if (\Yii::$app->user->can('updatePost', ['post' => $model])) {
			echo Html::a(Yii::t('app', 'Edit Profile'), ['update', 'id' => $model->id], ['class' => 'btn btn-primary']);
			echo "&nbsp";
			echo Html::a(Yii::t('app', 'Change Password'), ['changepassword'], ['class' => 'btn btn-primary']);
		} ?>
	</p>

    <?= DetailView::widget([
        'model' => $model,
        'attributes' => [
            'first_name',
            'last_name',
            'username',
            'email:email',
        ],
    ]) ?>

</div>
