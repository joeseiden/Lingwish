class Consonant < ApplicationRecord
  validates :point, :method, :char, presence: true
  validates :char, uniqueness: true
  validates :voiced, inclusion: { in: [true, false] }
  validates :point, inclusion: { in: %w(Bilabial Labiodental Dental Alveolar Postalveolar Retroflex Palatal Velar Uvular Pharyngeal Glottal) }
  validates :method, inclusion: { in: %w(Plosive Nasal Trill Tap Fricative Lateral-Fricative Approximant Lateral-Approximant) }

  def name
    @name ||= "#{self.voiced ? 'Voiced' : 'Unvoiced'} #{point} #{method}"
  end

  def self.valid_consonant?(new_con)
    print new_con
    con = Consonant.find_by(point: new_con[:point],
                            method: new_con[:method],
                            char: new_con[:char],
                            voiced: new_con[:voiced])
    !!con
  end
end
