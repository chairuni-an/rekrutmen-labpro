<?php

/* @var $this yii\web\View */

$this->title = 'My Yii Application';
?>

<div class="site-index">

    <div class="jumbotron">
        <?php if (Yii::$app->session->hasFlash('loginSuccess')): ?>
            <div class="alert alert-success">
                Selamat datang, <?php echo Yii::$app->user->identity->username ?>!
            </div>
        <?php elseif (Yii::$app->session->hasFlash('logoutSuccess')): ?>
            <div class="alert alert-success">
                Logout berhasil. Sampai jumpa kembali!
            </div>
        <?php endif; ?>
        <h1>Hello World!</h1>
    </div>

</div>
