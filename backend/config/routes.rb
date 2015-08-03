Rails.application.routes.draw do
  root 'cards#index'

  namespace :api do
    namespace :v1 do
      resources :cards, only: [:index, :show, :create, :update]
    end
  end
end
