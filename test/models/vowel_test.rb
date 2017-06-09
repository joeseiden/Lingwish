# == Schema Information
#
# Table name: vowels
#
#  id         :integer          not null, primary key
#  openness   :string           not null
#  frontness  :string           not null
#  rounded    :boolean          not null
#  char       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class VowelTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
