%w(Plosive Nasal Trill Tap Fricative Lateral-Fricative Approximant Lateral-Approximant).each do |method|
  json.set! method do
    json.partial! "api/consonants/chartable_rows", row: @consonants.select { |consonant| consonant.method == method }
  end
end
