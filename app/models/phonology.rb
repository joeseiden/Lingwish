# == Schema Information
#
# Table name: phonologies
#
#  id                  :integer          not null, primary key
#  consonant_inventory :integer          default("{}"), is an Array
#  vowel_inventory     :integer          default("{}"), is an Array
#  conlang_id          :integer          not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#

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
