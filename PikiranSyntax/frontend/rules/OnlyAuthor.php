<?php

namespace frontend\rules;

use Yii; 
use yii\rbac\Rule;
use yii\filters\AccessControl;
use common\models\Artikel;
use frontend\controllers\ArtikelController;
 
class OnlyAuthor extends Rule
{
    public function execute($user, $item, $params)
    {
        $model = $params['post'];
        return Yii::$app->user->id == $model->createBy->id;
    }
}