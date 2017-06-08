class Conlang < ApplicationRecord
  validates :name, :phonology, presence: true
  before_create :build_phonology

  belongs_to :user
  has_one :phonology, dependent: :destroy
end
