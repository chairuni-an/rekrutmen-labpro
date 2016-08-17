class AddReadToNotifpostlike < ActiveRecord::Migration
  def change
    add_column :notifpostlikes, :read, :boolean
  end
end
