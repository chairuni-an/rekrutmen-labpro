class AddNimToUsers < ActiveRecord::Migration
  def change
    add_column :users, :nim, :string
    add_index :users, :nim, unique: true
  end
end
