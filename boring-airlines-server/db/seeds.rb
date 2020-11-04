# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
u1 = User.create :username => 'Ryan Bullough', :email => 'sailorjerry@ga.co', :password => 'chicken', :admin => true
u2 = User.create :username => 'William Rudder', :email => 'eldorado@ga.co', :password => 'chicken', :admin => true
u3 = User.create :username => 'Robert Stoelhorst', :email => 'thekraken@ga.co', :password => 'chicken', :admin => true
u4 = User.create :username => 'Captain Morgan', :email => 'sirhenrymorgan@ga.co', :password => 'chicken', :admin => true
puts "#{ User.count } users."

Plane.destroy_all
p1 = Plane.create :name => "Boeing 747", :rows => 3, :columns => 3
p2 = Plane.create :name => "Boeing 747", :rows => 4, :columns => 4
p3 = Plane.create :name => "Starship", :rows => 2, :columns => 5
p4 = Plane.create :name => "Falcon 9", :rows => 1, :columns => 3
puts "#{ Plane.count } planes."

Flight.destroy_all
f1 = Flight.create :flight_number => 122, :origin => 'Sydney', :destination => 'Paradise', :date => "2020-10-10"
f2 = Flight.create :flight_number => 141, :origin => 'California', :destination => 'Fucked', :date => "2020-10-10"
f3 = Flight.create :flight_number => 187, :origin => 'Cape Canaveral', :destination => 'Mars', :date => "2020-10-10"
f4 = Flight.create :flight_number => 116, :origin => 'Melbourne', :destination => 'Sea of Tranquility', :date => "2020-10-10"
puts "#{ Flight.count } flights."

puts "Planes and Flights"
p1.flights << f1
p2.flights << f2
p3.flights << f3
p4.flights << f4
