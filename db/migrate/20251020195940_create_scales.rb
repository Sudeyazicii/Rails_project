class CreateScales < ActiveRecord::Migration[8.0]
  def change
    create_table :scales do |t|
      t.integer :value
      t.string :label

      t.timestamps
    end
  end
end
