class Flight < ApplicationRecord
  has_many :users, through: :reservations
  has_many :reservations
  belongs_to :plane
end
