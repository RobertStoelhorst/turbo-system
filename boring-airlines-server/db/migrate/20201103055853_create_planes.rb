class CreatePlanes < ActiveRecord::Migration[5.2]
  def change
    create_table :planes do |t|
      t.integer :row
      t.integer :column
      t.text :name

      t.timestamps
    end
  end
end
