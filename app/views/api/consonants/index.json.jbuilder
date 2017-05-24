@consonants.each do |consonant|
  json.set! consonant.id do
    json.partial! "api/consonants/consonant", consonant: consonant
  end
end
