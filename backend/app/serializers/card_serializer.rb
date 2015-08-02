class CardSerializer < ActiveModel::Serializer
  attributes :id, :image, :name, :correctly_matched
end
