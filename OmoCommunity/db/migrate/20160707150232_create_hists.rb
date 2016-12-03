class CreateHists < ActiveRecord::Migration
  def change
    create_table :hists do |t|
      t.string :Title
      t.string :Content

      t.timestamps null: false
    end
  end
end
