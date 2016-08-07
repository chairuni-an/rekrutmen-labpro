<?php

/* @var $this \yii\web\View */
/* @var $content string */

use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Breadcrumbs;
use frontend\assets\AppAsset;
use common\widgets\Alert;

AppAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?= Html::csrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>
	
	<style type="text/css">
		body {
			background: #f0f0f0;
		}
		
		.content {
			margin-bottom: 30px;
			width: 100%;
			background: #fbfbfb;
			border-radius: 5px;
			padding: 10px;
		}
		
		.content:hover {
			background: #f5f5f5;
		}
		
		.content-title a {
			font-size: 18px;
			font-color: #333;
			width: 100%;
			border-bottom:1px doted #ccc;
		}
		
		.content-detail {
			font-size: 10px;
			width: 100%;
			color: blue;
			margin-bottom: 10px;
		}
		
		.content-fill {
			width: 100%;
			font-size: 12px;
		}
	</style>
</head>
<body>
<?php $this->beginBody() ?>

<div class="wrap">
    <?php
		NavBar::begin([
			'brandLabel' => Yii::$app->name,
			'brandUrl' => Yii::$app->homeUrl,
			'options' => [
				'class' => 'navbar-inverse navbar-fixed-top',
			],
		]);
	?>
	
	<form action="index.php" method="GET" class="navbar-form navbar-left" role="search">
		<div class="form-group">
			<input type="hidden" name="r" value="site/search">
			<input type="text" name="key" class="form-control" placeholder="Search">
		</div>
		<button type="submit" class="btn btn-default"><span class="glyphicon glyphicon-search"></span></button>
	</form>
	
	

	<?php
		echo Nav::widget([
			'options' => ['class' => 'navbar-nav navbar-right'],
			'items' => [
				['label' => 'Home', 'url' => ['/site/index']],
				['label' => 'Profil', 'url' => ['/user/view', 'id' => Yii::$app->user->id], 'visible' => !Yii::$app->user->isGuest],
				['label' => 'Kategori', 'items' => common\models\Kategori::getKategoriMenu()],
				['label' => 'Signup', 'url' => ['/site/signup'], 'visible' => Yii::$app->user->isGuest],
				Yii::$app->user->isGuest ? (
					['label' => 'Login', 'url' => ['site/login']]
				) : (
					[
						'label' => 'Logout (' . Yii::$app->user->identity->username . ')',
						'url' => ['/site/logout'],
						'linkOptions' => ['data-method' => 'post']
					]
				)
			
			],
		]);
		
		NavBar::end();
    ?>
	
	
	<div class="container-fluid" style="background: #fff; width: 960px; margin-top: 50px">
		<div class="row-fluid">
			<div class="jumbotron" style="background: #f0f0f0; margin-top: 20px; padding-top: 10px; padding-bottom: 10px" >
				<h1>Pikiran Syntax</h1>
				<p class="lead">Pandangan, Perspektif, Pemikiran</p>
				<p><a class="btn btn-lg btn-success" href="http://localhost/PikiranSyntax/frontend/web/index.php">Home</a></p>
			</div>
		</div>
		
		<div class="row-fluid">
			<div class="col-md-8">
				<?php if(Yii::$app->session->hasFlash('search')):?>
					<div class="alert alert-info">
						Hasil pencarian dengan kata kunci '<?php echo Yii::$app->session->getFlash('search'); ?>'
					</div>
				<?php endif; ?>
				<?= $content ?>
			</div>
			
			<div class="col-md-4">
				<p><a class="btn btn-success btn-block" href="http://localhost/PikiranSyntax/frontend/web/index.php?r=artikel%2Fcreate">Tambah Artikel</a></p>
				<div class="panel panel-default">
					<div class="panel-heading">Top Artikel</div>
					<div class="panel-body">
						<ul>
						<?php /*
							<?php foreach(common\models\Artikel::topArtikel() as $row): ?>
								<li><?= Html::a($row->judul .' ('.$row->jumlah_baca.')', ['view', 'id' => $row->id_artikel]) ?></li>
							<?php endforeach; ?>
						*/ ?>
						</ul>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel-heading">Komentar Terbanyak</div>
					<div class="panel-body">
						<ul>
						<?php /*
/*						<?php foreach(common\models\Artikel::topKomentar() as $row): ?>
							<li><?= Html::a($row->judul .' ('. count($row->komentars).')', ['view', 'id' => $row->id_artikel]) ?></li>
						<?php endforeach; ?>
						*/ ?>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<footer class="footer">
    <div class="container">
        <p class="pull-left"><?= Yii::$app->name ?> &copy; <?= date('Y') ?> Ade Yusuf Rahardian</p>

        <p class="pull-right"><?= Yii::powered() ?></p>
    </div>
</footer>

<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
