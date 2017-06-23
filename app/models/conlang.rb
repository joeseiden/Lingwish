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
  alias_attribute :lexicon, :words

  after_create :create_phonology
  has_one :phonology, dependent: :destroy
  has_many :words, dependent: :destroy

  def words
    Word.where(conlang_id: self.id).order(:word)
  end

  def create_phonology
    self.build_phonology.save
  end
end
