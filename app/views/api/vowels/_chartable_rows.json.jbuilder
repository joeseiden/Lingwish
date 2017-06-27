%w(Front NearFront Central NearBack Back).each do |frontness|
  json.set! frontness do
    json.array! row.select { |vowel| vowel.frontness == frontness } do |vowel|
      json.partial! "api/vowels/vowel", vowel: vowel
    end
  end
end
