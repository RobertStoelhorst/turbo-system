class Plane < ApplicationRecord
  has_many :flights
  has_many :users
  end
