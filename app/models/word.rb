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

class Word < ApplicationRecord
  validates :word, :conlang_id, presence: true

  belongs_to :conlang
end
