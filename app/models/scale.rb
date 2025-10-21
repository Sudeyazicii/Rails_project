class Scale < ApplicationRecord
  has_many :responses, dependent: :destroy

  validates :value, presence: true
end
