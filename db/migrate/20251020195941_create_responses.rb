class CreateResponses < ActiveRecord::Migration[8.0]
  def change
    create_table :responses do |t|
      t.references :user, null: false, foreign_key: true
      t.references :survey, null: false, foreign_key: true
      t.references :scale, null: false, foreign_key: true
      t.text :comment

      t.timestamps
    end
  end
end
