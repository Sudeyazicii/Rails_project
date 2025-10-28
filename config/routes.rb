Rails.application.routes.draw do
  root "home#index"
  get "home/index"
  get "welcome/index"


  namespace :api do
    namespace :v1 do
      post 'login', to: 'authentication#login'
      resources :users, only: [:index, :create]
      resources :credits, only: [:index]
      resources :surveys, only: [:index]
      resources :scales, only: [:index]
      resources :responses, only: [:index]
    end
  end
end
