<<<<<<< HEAD
Rails.application.config.middleware.insert_before 0, Rack::Cors do 
  allow do
    origins 'http://localhost:3000'
  
    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head],
      credentials: true
  end
end
=======
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*' # this actually needs an explicit list on Heroku
    resource '*',
      :headers => :any,
      :methods => %i( get post put patch delete options head )
  end
end
>>>>>>> 6eae872bd25d93d6fe4ccda611e5c5b0f4074c59
