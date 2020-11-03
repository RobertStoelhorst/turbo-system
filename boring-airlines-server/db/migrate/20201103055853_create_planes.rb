class CreatePlanes < ActiveRecord::Migration[5.2]
  def change
    create_table :planes do |t|
      t.integer :rows
      t.integer :columns
      t.text :name

      t.timestamps
    end
  end
end
