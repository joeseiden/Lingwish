@words.each do |word|
  json.set! word.id do
    json.partial! "api/words/word", word: word
  end
end
