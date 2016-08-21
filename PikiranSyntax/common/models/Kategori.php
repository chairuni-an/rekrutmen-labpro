<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "kategori".
 *
 * @property integer $id_kategori
 * @property string $nama_kategori
 *
 * @property Artikel[] $artikels
 */
class Kategori extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'kategori';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['nama_kategori'], 'required'],
            [['nama_kategori'], 'string', 'max' => 200],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_kategori' => Yii::t('app', 'Id Kategori'),
            'nama_kategori' => Yii::t('app', 'Nama Kategori'),
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getArtikels()
    {
        return $this->hasMany(Artikel::className(), ['id_kategori' => 'id_kategori']);
    }
	
	public function getKategoriMenu()
	{
		$ar = [];
		foreach(Kategori::find()->all() as $row)
		{
			$ar[] = ['label' => $row->nama_kategori, 'url' => ['/site/index', 'kategori' => $row->id_kategori]];
		}
		
		return $ar;
	}
}
