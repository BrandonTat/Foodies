class AddHoursToBusinesses < ActiveRecord::Migration[5.0]
  def change
    add_column :businesses, :mon, :string
    add_column :businesses, :tue, :string
    add_column :businesses, :wed, :string
    add_column :businesses, :thu, :string
    add_column :businesses, :fri, :string
    add_column :businesses, :sat, :string
    add_column :businesses, :sun, :string
  end
end
