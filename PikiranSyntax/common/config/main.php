<?php
return [
    'vendorPath' => dirname(dirname(__DIR__)) . '/vendor',
    'modules' => [
        'admin' => [
            'class' => 'mdm\admin\Module',
        ]
    ],
	'components' => [
        'cache' => [
            'class' => 'yii\caching\FileCache',
        ],
       'authManager' => [
            'class' => 'yii\rbac\DbManager', // or use 'yii\rbac\DbManager'
        ]
    ],
	'as access' => [
        'class' => 'mdm\admin\components\AccessControl',
        'allowActions' => [
            'site/*', // tambahkan action-action yg lain di sini
			'artikel/*',
			'user/*',
			'komentar/*',
			'kategori/*',
		//	'admin/*',
        ]
    ],
];
