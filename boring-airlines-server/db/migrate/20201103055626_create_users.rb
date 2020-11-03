class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
<<<<<<< HEAD
      t.text :username
=======
      t.text :name
>>>>>>> 6eae872bd25d93d6fe4ccda611e5c5b0f4074c59
      t.text :email
      t.text :password
      t.text :password_digest

      t.timestamps
    end
  end
end
