Rails.application.routes.draw do
  resources :flights
  resources :planes

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/logged_in', to: 'sessions#is_logged_in?'
  
  resources :users, only: [:create, :show, :index]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end