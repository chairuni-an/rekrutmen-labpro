class CreateNotifpostlikes < ActiveRecord::Migration
  def change
    create_table :notifpostlikes do |t|
      t.references :user, index: true, foreign_key: true
      t.integer :post_id
      t.string :tipe

      t.timestamps null: false
    end
  end
end
