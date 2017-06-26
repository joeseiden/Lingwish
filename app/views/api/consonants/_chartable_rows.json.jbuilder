%w(Bilabial Labiodental Dental Alveolar Postalveolar Retroflex Palatal Velar Uvular Pharyngeal Glottal).each do |point|
  json.set! point do
    json.array! row.select { |consonant| consonant.point == point } do |consonant|
      json.partial! "api/consonants/consonant", consonant: consonant
    end
  end
end
