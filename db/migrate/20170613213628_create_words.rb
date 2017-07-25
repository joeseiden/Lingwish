class CreateWords < ActiveRecord::Migration[5.0]
  def change
    create_table :words do |t|
      t.string :word, null: false
      t.string :type
      t.text :definition
      t.integer :conlang_id, null: false

      t.timestamps
    end
  end
end
