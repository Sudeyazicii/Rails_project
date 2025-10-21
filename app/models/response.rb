class Response < ApplicationRecord
  belongs_to :user
  belongs_to :survey
  belongs_to :scale

  validates :comment, length: { maximum: 500 }
end
