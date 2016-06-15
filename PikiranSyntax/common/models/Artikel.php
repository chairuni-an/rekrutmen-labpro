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
            [['judul', 'isi_artikel', 'id_kategori', 'jumlah_baca', 'create_by', 'create_time', 'update_by', 'update_time'], 'required'],
            [['isi_artikel'], 'string'],
            [['id_kategori', 'jumlah_baca', 'create_by', 'update_by'], 'integer'],
            [['judul'], 'string', 'max' => 255],
            [['create_time', 'update_time'], 'string', 'max' => 10],
            [['id_kategori'], 'exist', 'skipOnError' => true, 'targetClass' => Kategori::className(), 'targetAttribute' => ['id_kategori' => 'id_kategori']],
            [['create_by'], 'exist', 'skipOnError' => true, 'targetClass' => User::className(), 'targetAttribute' => ['create_by' => 'id']],
            [['update_by'], 'exist', 'skipOnError' => true, 'targetClass' => User::className(), 'targetAttribute' => ['update_by' => 'id']],
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
}
