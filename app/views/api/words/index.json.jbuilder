@words.each do |word|
  json.set! word.id do
    json.partial! "api/words/word", word: word
    json.conlang word.conlang.name
    json.author word.user.username
  end
end
