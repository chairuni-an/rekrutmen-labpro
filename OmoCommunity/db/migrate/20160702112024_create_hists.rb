class CreateHists < ActiveRecord::Migration
  def change
    create_table :hists do |t|
      t.string :Title
      t.text :Content
      t.references :post, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
