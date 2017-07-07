class AddDescriptionToConlangs < ActiveRecord::Migration[5.0]
  def change
    add_column :conlangs, :description, :text
  end
end
