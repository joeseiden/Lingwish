class CreateConlangs < ActiveRecord::Migration[5.0]
  def change
    create_table :conlangs do |t|
      t.string :name, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :conlangs, :user_id
  end
end
