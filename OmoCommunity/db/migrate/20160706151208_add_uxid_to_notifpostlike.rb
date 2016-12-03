class AddUxidToNotifpostlike < ActiveRecord::Migration
  def change
    add_column :notifpostlikes, :uxid, :integer
  end
end
