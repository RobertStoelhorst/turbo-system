class CreateJoinTableUsersFlights < ActiveRecord::Migration[5.2]
  def change
    create_table "users_flights", id: false, force: :cascade do |t|
      t.integer "user_id"
      t.integer "flight_id"
    end
  end
end
