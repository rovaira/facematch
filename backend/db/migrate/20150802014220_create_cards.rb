class CreateCards < ActiveRecord::Migration
  def change
    create_table :cards do |t|
      t.string :image, null: false
      t.string :name, null: false
      t.boolean :correctly_matched, default: false
      t.timestamps
    end
  end
end
