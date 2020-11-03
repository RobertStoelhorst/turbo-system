class User < ApplicationRecord
  has_secure_password
<<<<<<< HEAD
  validates :username, presence: true
  validates :username, uniqueness: true
  validates :username, length: { minimum: 4 }
  validates :email, presence: true
  validates :email, uniqueness: true
  validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
=======
validates :username, presence: true
validates :username, uniqueness: true
validates :username, length: { minimum: 4 }
validates :email, presence: true
validates :email, uniqueness: true
validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
has_many :flights, through: :reservations
>>>>>>> 6eae872bd25d93d6fe4ccda611e5c5b0f4074c59
end
