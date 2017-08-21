class SyllableGenerator

  def initialize(consonants, vowels, structure="CV")
    @structure = structure if structure.is_a?(String) && structure =~ /^[C]*[V]+[C]*$/
    @consonants = consonants if consonants.is_a?(Array)
    @vowels = vowels if vowels.is_a?(Array)

    @onset_count = calculate_onset_count
    @nucleus_count = calculate_nucleus_count
    @coda_count = calculate_coda_count
  end

  def generate_syllable

  end

  def calculate_onset_count
    count = 0
    @structure.each_char do |chr|
      break if chr == "V"
      count += 1
    end
    count
  end

  def calculate_coda_count
    count = 0
    @structure.reverse.each_char do |chr|
      break if chr == "V"
      count += 1
    end
    count
  end

  def calculate_nucleus_count
    @structure.count("V")
  end
end
