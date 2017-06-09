# == Schema Information
#
# Table name: consonants
#
#  id         :integer          not null, primary key
#  point      :string           not null
#  method     :string           not null
#  voiced     :boolean          not null
#  char       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class ConsonantTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
