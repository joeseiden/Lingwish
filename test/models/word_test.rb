# == Schema Information
#
# Table name: words
#
#  id         :integer          not null, primary key
#  word       :string           not null
#  type       :string
#  definition :text
#  conlang_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class WordTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
