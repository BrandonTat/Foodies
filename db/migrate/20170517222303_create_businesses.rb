class CreateBusinesses < ActiveRecord::Migration[5.0]
  def change
    create_table :businesses do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :zip, null: false
      t.integer :price, null: false
      t.string :image_url, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.integer :category_id, null: false
      t.timestamps
    end

    add_index :businesses, :category_id
  end
end
