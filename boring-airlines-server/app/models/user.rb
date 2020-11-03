class User < ApplicationRecord
  has_many :flights
  has_and_belongs_to_many :flights
end
