class AddTipeToNotifpost < ActiveRecord::Migration
  def change
    add_column :notifposts, :tipe, :string
  end
end
