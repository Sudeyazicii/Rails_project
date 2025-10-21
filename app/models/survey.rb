class Survey < ApplicationRecord
  belongs_to :user
  has_many :responses, dependent: :destroy

  validates :title, presence: true
end
