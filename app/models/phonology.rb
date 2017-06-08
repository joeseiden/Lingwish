class Phonology < ApplicationRecord
  belongs_to :conlang
  validates :consonant_inventory, :vowel_inventory, presence: true
end
