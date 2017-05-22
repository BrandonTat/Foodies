class Tag < ApplicationRecord
  validates :category_id, :business_id, presence: true
end
