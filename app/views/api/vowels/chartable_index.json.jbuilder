%w(Close NearClose CloseMid Mid OpenMid NearOpen Open).each do |openness|
  json.set! openness do
    json.partial! "api/vowels/chartable_rows", row: @vowels.select { |vowel| vowel.openness == openness }
  end
end
