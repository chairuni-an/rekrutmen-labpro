class AddPostToAttachment < ActiveRecord::Migration
  def change
    add_reference :attachments, :post, index: true, foreign_key: true
  end
end
