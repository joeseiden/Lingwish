@vowels.each do |vowel|
  json.set! vowel.id do
    json.partial! "api/vowels/vowel", vowel: vowel
  end
end
