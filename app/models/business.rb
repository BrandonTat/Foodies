# == Schema Information
#
# Table name: businesses
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  address     :string           not null
#  city        :string           not null
#  state       :string           not null
#  zip         :string           not null
#  price       :integer          not null
#  image_url   :string           not null
#  lat         :float            not null
#  lng         :float            not null
#  category_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Business < ApplicationRecord
  validates :name, :address, :city, :state, :zip, :price, :image_url,
            :lat, :lng, :category_id, presence: true
  validates :price, inclusion: { in: [1, 2, 3, 4] }
end
