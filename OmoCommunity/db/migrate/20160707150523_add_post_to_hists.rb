class AddPostToHists < ActiveRecord::Migration
  def change
    add_reference :hists, :post, index: true, foreign_key: true
  end
end
