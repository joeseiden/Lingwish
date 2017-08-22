require_relative "word_generator"

class WordGenerator

  def initialize(consonants, vowels, syllable_structure, length)
    # fill in validation method to raise errors if any are bad
    validate_initial_variables
    @consonants = consonants
    @vowels = vowels
    @syllable_structure = syllable_structure
    @length = length
    @syllable_generator = SyllableGenerator.new(@consonants, @vowels, @syllable_structure)
  end

  def generate_word
    length = 1 + rand(@length)
    word = ""
    length.times do
      word += @syllable_generator.generate_syllable
    end
    word
  end

  private

  def validate_initial_variables

  end
end
