class Vowel < ApplicationRecord
  validates :openness, :frontness, :char, presence: true
  validates :char, uniqueness: true
  validates :openness, inclusion: { in: %w(Close Near-Close Close-Mid Mid Open-Mid Near-Open Open)}
  validates :frontness, inclusion: { in: %w(Front Near-Front Central Near-Back Back)}

  def name
    @name ||= "#{rounded ? 'Rounded' : 'Unrounded'} #{openness} #{frontness} Vowel"
  end
end
