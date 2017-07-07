json.extract! conlang, :id, :name, :description
json.author do
  json.id conlang.user_id
  json.username conlang.user.username
end

json.phonology do
  json.partial! "api/phonologies/phonology", phonology: conlang.phonology
end

json.lexicon conlang.words, partial: "api/words/word", as: :word
