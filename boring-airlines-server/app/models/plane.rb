class Plane < ApplicationRecord
  has_many :flights

  def seats
    self.row * self.column
  end

  end
