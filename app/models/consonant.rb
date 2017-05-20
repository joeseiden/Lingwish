class Consonant < ApplicationRecord
  validates :point, :method, :voiced, :char, presence: true
  validates :char, uniqueness: true
  validates :point, inclusion: { in: %w(Bilabial Labiodental Dental Alveolar Postalveolar Retroflex Palatal Velar Uvular Pharyngeal Glottal) }
  validates :method, inclusion: { in: %w(Plosive Nasal Trill Tap Fricative Lateral-Fricative Approximant Lateral-Approximant) }
end
