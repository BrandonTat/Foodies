class AddPhoneToBusinesses < ActiveRecord::Migration[5.0]
  def change
    add_column :businesses, :phone_number, :string, null: false
  end
end
