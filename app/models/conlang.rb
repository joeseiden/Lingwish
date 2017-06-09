class Conlang < ApplicationRecord
  validates :name, presence: true
  belongs_to :user

  after_create :create_phonology
  has_one :phonology, dependent: :destroy


  private

  def create_phonology
    self.create_phonology!
  end
end
