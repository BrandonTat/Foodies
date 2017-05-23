# == Schema Information
#
# Table name: tags
#
#  id          :integer          not null, primary key
#  business_id :integer          not null
#  category_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Tag < ApplicationRecord
  validates :category_id, :business_id, presence: true

  belongs_to :business
  belongs_to :category
end
