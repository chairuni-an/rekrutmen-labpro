class CreateNotifposts < ActiveRecord::Migration
  def change
    create_table :notifposts do |t|
      t.references :user, index: true, foreign_key: true
      t.integer :topic_id
      t.boolean :read

      t.timestamps null: false
    end
  end
end
