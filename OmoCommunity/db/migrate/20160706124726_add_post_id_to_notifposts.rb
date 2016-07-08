class AddPostIdToNotifposts < ActiveRecord::Migration
  def change
    add_column :notifposts, :post_id, :integer
  end
end
