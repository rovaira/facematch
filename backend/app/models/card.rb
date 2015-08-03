class Card < ActiveRecord::Base
  validates :image, presence: true
  validates :name, presence: true
  validates :correctly_matched, presence: true
end
