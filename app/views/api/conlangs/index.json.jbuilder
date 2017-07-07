@conlangs.each do |conlang|
  json.set! conlang.id do
    json.extract! conlang, :id, :name, :description
    json.user do
      json.id conlang.user_id
      json.username conlang.user.username
    end
  end
end
