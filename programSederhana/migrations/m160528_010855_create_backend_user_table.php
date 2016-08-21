<?php

use yii\db\Migration;

/**
 * Handles the creation for table `backend_user_table`.
 */
class m160528_010855_create_backend_user_table extends Migration
{
    /**
     * @inheritdoc
     */
    public function up()
    {
        $this->createTable('backend_user', [
            'id' => $this->primaryKey(),
			'firstName' => $this->string(20)->notNull(),
			'lastName' => $this->string(20)->notNull(),
			'username' => $this->string(30)->notNull(),
			'password' => $this->string(30)->notNull(),
			'authKey' => $this->string(50)->notNull(),
        ]);
		
		// sample data
		$this->batchInsert('backend_user',
			['id', 'firstName', 'lastName', 'username', 'password', 'authKey'],
			[
				['1', 'admin', 'admin', 'admin', 'admin', 'admin123'],
				['2', 'Ade Yusuf', 'Rahardian', 'adeyura', '12345', 'ade123'],
			]
		);
    }

    /**
     * @inheritdoc
     */
    public function down()
    {
        $this->dropTable('backend_user');
    }
}
