json.extract! conlang, :id, :name, :user_id

json.phonology do
  json.partial! "api/phonologies/phonology", phonology: conlang.phonology
end
