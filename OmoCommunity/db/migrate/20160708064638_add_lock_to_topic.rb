class AddLockToTopic < ActiveRecord::Migration
  def change
    add_column :topics, :lock, :boolean
  end
end
