@conlangs.each do |conlang|
  json.set! conlang.id do
    json.partial! "api/conlangs/conlang", conlang: conlang
  end
end
