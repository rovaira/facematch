class Card < ActiveRecord::Base
  validates :image, presence: true
  validates :name, presence: true
end
