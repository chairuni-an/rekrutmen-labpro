<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "artikel".
 *
 * @property integer $id_artikel
 * @property string $judul
 * @property string $isi_artikel
 * @property integer $id_kategori
 * @property integer $jumlah_baca
 * @property integer $create_by
 * @property string $create_time
 * @property integer $update_by
 * @property string $update_time
 *
 * @property Kategori $idKategori
 * @property User $createBy
 * @property User $updateBy
 * @property Komentar[] $komentars
 */
class Artikel extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'artikel';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['judul', 'isi_artikel', 'id_kategori'], 'required'],
            [['isi_artikel'], 'string'],
            [['id_kategori', 'jumlah_baca', 'create_by', 'update_by'], 'integer'],
            [['judul'], 'string', 'max' => 255],
            [['create_time', 'update_time'], 'string', 'max' => 10]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_artikel' => Yii::t('app', 'Id Artikel'),
            'judul' => Yii::t('app', 'Judul'),
            'isi_artikel' => Yii::t('app', 'Isi Artikel'),
            'id_kategori' => Yii::t('app', 'Id Kategori'),
            'jumlah_baca' => Yii::t('app', 'Jumlah Baca'),
            'create_by' => Yii::t('app', 'Create By'),
            'create_time' => Yii::t('app', 'Create Time'),
            'update_by' => Yii::t('app', 'Update By'),
            'update_time' => Yii::t('app', 'Update Time'),
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getIdKategori()
    {
        return $this->hasOne(Kategori::className(), ['id_kategori' => 'id_kategori']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getCreateBy()
    {
        return $this->hasOne(User::className(), ['id' => 'create_by']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getUpdateBy()
    {
        return $this->hasOne(User::className(), ['id' => 'update_by']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getKomentars()
    {
        return $this->hasMany(Komentar::className(), ['id_artikel' => 'id_artikel']);
    }
	
	public static function topArtikel()
	{
		return self::find()
				->orderBy('jumlah_baca DESC')
				->limit(10)
				->all();
	}
	
	public function topKomentar()
	{
		return Artikel::findBySql("SELECT a . * , COUNT( k.id_komentar ) AS jumlah
						FROM artikel a
						LEFT JOIN komentar k ON (k.id_artikel = a.id_artikel)
						GROUP BY a.id_artikel
						ORDER BY jumlah DESC
						limit 0, 10")->all();
	}
	
	public function beforeSave($insert)
	{
		parent::beforeSave($insert);
		if ($this->isNewRecord)
		{
			$this->jumlah_baca = 0;
			$this->create_by = Yii::$app->user->id;
			$this->update_by = Yii::$app->user->id;
			$this->create_time = time();
			$this->update_time = time();
		}
		else
		{
			$this->update_by = Yii::$app->user->id;
			$this->update_time = time();
		}
		return true;
	}
}
