class User < ApplicationRecord
  has_many :surveys, dependent: :destroy
  has_many :responses, dependent: :destroy
  has_one :credit, dependent: :destroy

  validates :name, :email, presence: true
  validates :email, uniqueness: true
end
