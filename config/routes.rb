Rails.application.routes.draw do
  root "home#index"
  get "home/index"
  get "welcome/index"

  namespace :api do
    resources :users, only: [ :index ]
    resources :credits, only: [ :index ]
    resources :surveys, only: [ :index ]
    resources :scales, only: [ :index ]
    resources :responses, only: [ :index ]
  end
end
