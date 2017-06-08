class CreatePhonologies < ActiveRecord::Migration[5.0]
  def change
    create_table :phonologies do |t|
      t.json :consonant_inventory, array: true, default: []
      t.json :vowel_inventory, array: true, default: []
      t.integer :conlang_id, null: false

      t.timestamps
    end
  end
end
