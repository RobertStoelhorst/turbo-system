class Flight < ApplicationRecord
  has_many :reservations
  belongs_to :plane
  has_and_belongs_to_many :users
end
