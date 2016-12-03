class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :judul
      t.text :isi

      t.timestamps null: false
    end
  end
end
