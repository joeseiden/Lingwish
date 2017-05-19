class CreateVowels < ActiveRecord::Migration[5.0]
  def change
    create_table :vowels do |t|
      t.string :closeness, null: false
      t.string :openness, null: false
      t.boolean :rounded, null: false
      t.string :char, null: false

      t.timestamps
    end

    add_index :vowels, [:closeness, :openness, :rounded, :char], unique: true
  end
end
