class AddSyllablesToPhonology < ActiveRecord::Migration[5.0]
  def change
    add_column :phonologies, :syllables, :string, array: true
  end
end
