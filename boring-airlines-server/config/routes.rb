Rails.application.routes.draw do
  resources :flights
  resources :planes
<<<<<<< HEAD

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/logged_in', to: 'sessions#is_logged_in?'
  
  resources :users, only: [:create, :show, :index]
=======
   resources :users, only: [:create, :show, :index]
>>>>>>> 6eae872bd25d93d6fe4ccda611e5c5b0f4074c59
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
