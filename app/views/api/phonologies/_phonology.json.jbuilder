json.extract! phonology, :id
json.consonants phonology.consonants, partial: "api/consonants/consonant", as: :consonant
json.vowels phonology.vowels, partial: "api/vowels/vowel", as: :vowel
