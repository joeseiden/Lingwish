json.partial! 'api/users/user', user: @user

json.conlangs do
  json.array! user.conlangs do |conlang|
    json.extract! conlang, :id, :name, :description
  end
end
