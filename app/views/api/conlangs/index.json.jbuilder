json.array!(@conlangs) do |conlang|
  json.extract! conlang, :id, :name, :description
  json.author do
    json.id conlang.user_id
    json.username conlang.user.username
  end
end
