# == Schema Information
#
# Table name: conlangs
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  description :text
#

require 'test_helper'

class ConlangTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
