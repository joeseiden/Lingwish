class Vowel < ApplicationRecord
  validates :openness, :frontness, :char, presence: true
  validates :char, uniqueness: true
  validates :openness, inclusion: { in: %w(Close Near-Close Close-Mid Mid Open-Mid Near-Open Open)}
  validates :frontness, inclusion: { in: %w(Front Near-Front Central Near-Back Back)}

  def name
    @name ||= "#{openness} #{frontness} #{rounded ? 'Rounded' : 'Unrounded'} Vowel"
  end

  def self.valid_vowel?(new_vow)
    correct_vow = Vowel.find(new_vow["id"])
  end
end
