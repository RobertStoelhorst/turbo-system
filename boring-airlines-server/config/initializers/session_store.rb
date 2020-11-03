<<<<<<< HEAD
if Rails.env === 'production' 
  Rails.application.config.session_store :cookie_store, key: '_your-app-name', domain: 'your-frontend-domain'
else
  Rails.application.config.session_store :cookie_store, key: '_boring-airlines' 
end
=======
if Rails.env === 'production'
  Rails.application.config.session_store :cookie_store, key: '_boring-airlines', domain: 'your-frontend-domain'
else
  Rails.application.config.session_store :cookie_store, key: '_boring-airlines'
end
>>>>>>> 6eae872bd25d93d6fe4ccda611e5c5b0f4074c59
