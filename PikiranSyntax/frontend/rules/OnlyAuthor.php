<?php

namespace frontend\rules;

use Yii; 
use yii\rbac\Rule;
 
class OnlyAuthor extends Rule
{
    public function execute($user, $item, $params)
    {
        $model = $params['post'];
        return Yii::$app->user->id == $model->id;
    }
}