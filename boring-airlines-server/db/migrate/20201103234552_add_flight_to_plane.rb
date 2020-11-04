class AddFlightToPlane < ActiveRecord::Migration[5.2]
  def change
    add_column :planes, :id, :integer
  end
end
