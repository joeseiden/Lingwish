json.extract! user, :id, :username

json.conlangs do
  json.array! user.conlangs do |conlang|
    json.extract! conlang, :id, :name
  end
end
