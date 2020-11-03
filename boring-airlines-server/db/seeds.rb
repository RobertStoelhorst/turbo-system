# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
u1 = User.create :name => 'Ryan Bullough', :email => 'sailorjerry@ga.co', :password => 'chicken', :admin => true
u2 = User.create :name => 'William Rudder', :email => 'eldorado@ga.co', :password => 'chicken', :admin => true
u3 = User.create :name => 'Robert Stoelhorst', :email => 'thekraken@ga.co', :password => 'chicken', :admin => true
u4 = User.create :name => 'Captain Morgan', :email => 'sirhenrymorgan@ga.co', :password => 'chicken', :admin => true
puts "#{ User.count } users."

Plane.destroy_all
p1 = Plane.create :name => "Boeing 747", :row => 3, :column => 3
p1 = Plane.create :name => "Boeing 747", :row => 4, :column => 4
p1 = Plane.create :name => "Starship", :row => 2, :column => 5
p1 = Plane.create :name => "Falcon 9", :row => 1, :column => 3
puts "#{ Plane.count } planes."

Flight.destroy_all
f1 = Flight.create :flight_number => 122, :origin => 'Sydney', :destination => 'Paradise', :date => DateTime.strptime("Tuesday 01/12/2020 08:00", "%A %B %d, %Y, %H:%M")
f2 = Flight.create :flight_number => 141, :origin => 'California', :destination => 'Fucked', :date => DateTime.strptime("Tuesday 03/11/2020 16:00", "%A %B %d, %Y, %H:%M")
f3 = Flight.create :flight_number => 187, :origin => 'Cape Canaveral', :destination => 'Mars', :date => DateTime.strptime("Friday 25/12/2020 08:00", "%A %B %d, %Y, %H:%M")
f4 = Flight.create :flight_number => 116, :origin => 'Melbourne', :destination => 'Sea of Tranquility', :date => DateTime.strptime("Friday 06/11/2020 08:00", "%A %B %d, %Y, %H:%M")
puts "#{ Flight.count } flights."

puts "Planes and Flights"
p1.flights << f1
p2.flights << f2
p3.flights << f3
p4.flights << f4
