# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Consonant.create([
  { point: "Bilabial", method: "Plosive", voiced: false, char: "p" },
  { point: "Bilabial", method: "Plosive", voiced: true, char: "b" },
  { point: "Bilabial", method: "Nasal", voiced: true, char: "m" },
  { point: "Bilabial", method: "Trill", voiced: true, char: "ʙ" },
  { point: "Bilabial", method: "Fricative", voiced: false, char: "ɸ" },
  { point: "Bilabial", method: "Fricative", voiced: true, char: "β" },
  { point: "Labiodental", method: "Nasal", voiced: true, char: "ɱ" },
  { point: "Labiodental", method: "Tap", voiced: true, char: "ⱱ" },
  { point: "Labiodental", method: "Fricative", voiced: false, char: "f" },
  { point: "Labiodental", method: "Fricative", voiced: true, char: "v" },
  { point: "Labiodental", method: "Approximant", voiced: true, char: "ʋ" },
  { point: "Dental", method: "Fricative", voiced: false, char: "θ" },
  { point: "Dental", method: "Fricative", voiced: true, char: "ð" },
  { point: "Alveolar", method: "Plosive", voiced: false, char: "t" },
  { point: "Alveolar", method: "Plosive", voiced: true, char: "d" },
  { point: "Alveolar", method: "Nasal", voiced: true, char: "n" },
  { point: "Alveolar", method: "Trill", voiced: true, char: "r" },
  { point: "Alveolar", method: "Tap", voiced: true, char: "ɾ" },
  { point: "Alveolar", method: "Fricative", voiced: false, char: "s" },
  { point: "Alveolar", method: "Fricative", voiced: true, char: "z" },
  { point: "Alveolar", method: "Lateral-Fricative", voiced: false, char: "ɬ" },
  { point: "Alveolar", method: "Lateral-Fricative", voiced: true, char: "ɮ" },
  { point: "Alveolar", method: "Approximant", voiced: true, char: "ɹ" },
  { point: "Alveolar", method: "Lateral-Approximant", voiced: true, char: "l" },
  { point: "Postalveolar", method: "Fricative", voiced: false, char: "ʃ" },
  { point: "Postalveolar", method: "Fricative", voiced: true, char: "ʒ" },
  { point: "Retroflex", method: "Plosive", voiced: false, char: "ʈ" },
  { point: "Retroflex", method: "Plosive", voiced: true, char: "ɖ" },
  { point: "Retroflex", method: "Nasal", voiced: true, char: "ɳ" },
  { point: "Retroflex", method: "Tap", voiced: true, char: "ɽ" },
  { point: "Retroflex", method: "Fricative", voiced: false, char: "ʂ" },
  { point: "Retroflex", method: "Fricative", voiced: true, char: "ʐ" },
  { point: "Retroflex", method: "Approximant", voiced: true, char: "ɻ" },
  { point: "Retroflex", method: "Lateral-Approximant", voiced: true, char: "ɭ" },
  { point: "Palatal", method: "Plosive", voiced: false, char: "c" },
  { point: "Palatal", method: "Plosive", voiced: true, char: "ɟ" },
  { point: "Palatal", method: "Nasal", voiced: true, char: "ɲ" },
  { point: "Palatal", method: "Fricative", voiced: false, char: "ç" },
  { point: "Palatal", method: "Fricative", voiced: true, char: "ʝ" },
  { point: "Palatal", method: "Approximant", voiced: true, char: "j" },
  { point: "Palatal", method: "Lateral-Approximant", voiced: true, char: "ʎ" },
  { point: "Velar", method: "Plosive", voiced: false, char: "k" },
  { point: "Velar", method: "Plosive", voiced: true, char: "ɡ" },
  { point: "Velar", method: "Nasal", voiced: true, char: "ŋ" },
  { point: "Velar", method: "Fricative", voiced: false, char: "x" },
  { point: "Velar", method: "Fricative", voiced: true, char: "ɣ" },
  { point: "Velar", method: "Approximant", voiced: true, char: "ɰ" },
  { point: "Velar", method: "Lateral-Approximant", voiced: true, char: "ʟ" },
  { point: "Uvular", method: "Plosive", voiced: false, char: "q" },
  { point: "Uvular", method: "Plosive", voiced: true, char: "ɢ" },
  { point: "Uvular", method: "Nasal", voiced: true, char: "ɴ" },
  { point: "Uvular", method: "Trill", voiced: true, char: "ʀ" },
  { point: "Uvular", method: "Fricative", voiced: false, char: "χ" },
  { point: "Uvular", method: "Fricative", voiced: true, char: "ʁ" },
  { point: "Pharyngeal", method: "Fricative", voiced: false, char: "ħ" },
  { point: "Pharyngeal", method: "Fricative", voiced: true, char: "ʕ" },
  { point: "Glottal", method: "Plosive", voiced: false, char: "ʔ" },
  { point: "Glottal", method: "Fricative", voiced: false, char: "h" },
  { point: "Glottal", method: "Fricative", voiced: true, char: "ɦ" }
  ])

Vowel.create([
  { openness: "Close", frontness: "Front", rounded: false, char: "i" },
  { openness: "Close", frontness: "Front", rounded: true, char: "y" },
  { openness: "Close", frontness: "Central", rounded: false, char: "ɨ" },
  { openness: "Close", frontness: "Central", rounded: true, char: "ʉ" },
  { openness: "Close", frontness: "Back", rounded: false, char: "ɯ" },
  { openness: "Close", frontness: "Back", rounded: true, char: "u" },
  { openness: "Near-Close", frontness: "Near-Front", rounded: false, char: "ɪ" },
  { openness: "Near-Close", frontness: "Near-Front", rounded: true, char: "ʏ" },
  { openness: "Near-Close", frontness: "Near-Back", rounded: true, char: "ʊ" },
  { openness: "Close-Mid", frontness: "Front", rounded: false, char: "e" },
  { openness: "Close-Mid", frontness: "Front", rounded: true, char: "ø" },
  { openness: "Close-Mid", frontness: "Central", rounded: false, char: "ɘ" },
  { openness: "Close-Mid", frontness: "Central", rounded: true, char: "ɵ" },
  { openness: "Close-Mid", frontness: "Back", rounded: false, char: "ɤ" },
  { openness: "Close-Mid", frontness: "Back", rounded: true, char: "o" },
  { openness: "Mid", frontness: "Central", rounded: false, char: "ə" },
  { openness: "Open-Mid", frontness: "Front", rounded: false, char: "ɛ" },
  { openness: "Open-Mid", frontness: "Front", rounded: true, char: "œ" },
  { openness: "Open-Mid", frontness: "Central", rounded: false, char: "ɜ" },
  { openness: "Open-Mid", frontness: "Central", rounded: true, char: "ɞ" },
  { openness: "Open-Mid", frontness: "Back", rounded: false, char: "ʌ" },
  { openness: "Open-Mid", frontness: "Back", rounded: true, char: "ɔ" },
  { openness: "Near-Open", frontness: "Front", rounded: false, char: "æ" },
  { openness: "Near-Open", frontness: "Central", rounded: false, char: "ɐ" },
  { openness: "Open", frontness: "Front", rounded: false, char: "a" },
  { openness: "Open", frontness: "Front", rounded: true, char: "ɶ" },
  { openness: "Open", frontness: "Back", rounded: false, char: "ɑ" },
  { openness: "Open", frontness: "Back", rounded: true, char: "ɒ" }
  ])
User.destroy_all
barry = User.create!(username: "barry_bluejeans", password: "password")
conlang = barry.conlangs.create!(
name: "Test_conlang",
description: "This is a test conlang"
)

Word.create!([
  { word: "ʁ", conlang_id: conlang.id },
  { word: "a", conlang_id: conlang.id },
  { word: "c", conlang_id: conlang.id }
  ])
