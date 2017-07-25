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
  before_save :convert_to_integers

  def consonants
    Consonant.find(consonant_inventory)
  end

  def vowels
    Vowel.find(vowel_inventory)
  end

  private

  def convert_to_integers
    consonant_inventory.each(&:to_i)
    vowel_inventory.each(&:to_i)
  end
end
