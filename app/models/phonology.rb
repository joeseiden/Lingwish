class Phonology < ApplicationRecord
  belongs_to :conlang
  validates :consonant_inventory, :vowel_inventory,
            presence: true,
            allow_blank: true

  def consonants
    Consonant.find(consonant_inventory)
  end

  def vowels
    Vowel.find(vowel_inventory)
  end
end
