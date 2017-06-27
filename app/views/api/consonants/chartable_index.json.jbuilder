%w(Plosive Nasal Trill Tap Fricative LateralFricative Approximant LateralApproximant).each do |method|
  json.set! method do
    json.partial! "api/consonants/chartable_rows", row: @consonants.select { |consonant| consonant.method == method }
  end
end
