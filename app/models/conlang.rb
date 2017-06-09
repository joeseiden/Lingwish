# == Schema Information
#
# Table name: conlangs
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Conlang < ApplicationRecord
  validates :name, presence: true
  belongs_to :user

  after_create :create_phonology
  has_one :phonology, dependent: :destroy


  private

  def create_phonology
    self.create_phonology
  end
end
