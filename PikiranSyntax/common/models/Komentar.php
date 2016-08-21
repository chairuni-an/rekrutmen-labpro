<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "komentar".
 *
 * @property integer $id_komentar
 * @property integer $id_artikel
 * @property integer $id_user
 * @property string $isi_komentar
 * @property integer $create_time
 *
 * @property Artikel $idArtikel
 * @property User $idUser
 */
class Komentar extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'komentar';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['id_artikel', 'id_user', 'isi_komentar'], 'required'],
            [['id_artikel', 'id_user', 'create_time'], 'integer'],
            [['isi_komentar'], 'string'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_komentar' => Yii::t('app', 'Id Komentar'),
            'id_artikel' => Yii::t('app', 'Id Artikel'),
            'id_user' => Yii::t('app', 'Id User'),
            'isi_komentar' => Yii::t('app', 'Isi Komentar'),
            'create_time' => Yii::t('app', 'Create Time'),
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getIdArtikel()
    {
        return $this->hasOne(Artikel::className(), ['id_artikel' => 'id_artikel']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getIdUser()
    {
        return $this->hasOne(User::className(), ['id' => 'id_user']);
    }
	
	public function beforeSave($insert)
	{
		parent::beforeSave($insert);
		if ($this->isNewRecord)
		{
			$this->create_time = time();
		}
		return true;
	}
}