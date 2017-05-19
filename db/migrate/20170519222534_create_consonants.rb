class CreateConsonants < ActiveRecord::Migration[5.0]
  def change
    create_table :consonants do |t|
      t.string :point, null: false
      t.string :method, null: false
      t.boolean :voiced, null: false
      t.string :char, null: false

      t.timestamps
    end

    add_index :consonants, [:point, :method, :voiced, :char], unique: true
  end
end
