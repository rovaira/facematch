class CardSerializer < ActiveModel::Serializer
  embed :id, include: true
  attributes :id, :image, :name, :correctly_matched
end
