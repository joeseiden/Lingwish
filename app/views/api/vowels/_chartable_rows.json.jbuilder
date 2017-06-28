%w(Front Near-Front Central Near-Back Back).each do |frontness|
  json.set! frontness do
    json.array! row.select { |vowel| vowel.frontness == frontness } do |vowel|
      json.partial! "api/vowels/vowel", vowel: vowel
    end
  end
end
