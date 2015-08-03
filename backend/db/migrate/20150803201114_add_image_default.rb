class AddImageDefault < ActiveRecord::Migration
  def change
    change_column :cards, :image, :string, default: 'https://s3.amazonaws.com/facematch-production/static/alzheimersawareness.png'
  end
end
