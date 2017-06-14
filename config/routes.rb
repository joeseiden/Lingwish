Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update, :destroy, :show] do
      resources :conlangs, only: [:create, :update, :destroy, :index, :show] do
        resources :phonologies, only: [:update]
        resources :words, only: [:create, :update, :index, :show, :destroy]
      end
    end
    resources :conlangs, only: [:index, :show] do
      resources :words, only: [:index, :show]
    end
    resource :session, only: [:create, :destroy]
    resources :consonants, only: [:index, :show]
    resources :vowels, only: [:index, :show]
    resources :words, only: [:index, :show]
  end

  root "static_pages#root"
end
