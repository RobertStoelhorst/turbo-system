class Flight < ApplicationRecord
  has_many :reservations
  has_many :users, through: :reservations
  has_one :plane
end
