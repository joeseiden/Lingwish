# == Schema Information
#
# Table name: phonologies
#
#  id                  :integer          not null, primary key
#  consonant_inventory :integer          default("{}"), is an Array
#  vowel_inventory     :integer          default("{}"), is an Array
#  conlang_id          :integer          not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#

require 'test_helper'

class PhonologyTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
