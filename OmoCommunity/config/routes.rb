Rails.application.routes.draw do
  mount Ckeditor::Engine => '/ckeditor'
  

  #OMNIAUTH
  devise_for :users, :controllers => { :omniauth_callbacks => "callbacks"}
  resources :users, :only => [:show] do
    resources :notifposts do
      member do
        put 'changeread' => 'notifposts#changeread', as: :changeread
      end
    end
    resources :notifpostlikes do
      member do
        put 'changeread' => 'notifpostlikes#changeread', as: :changeread
      end
    end
  end
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'
  root 'topics#index'
  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end 
  resources :topics do
    member do
    put 'changelock' => 'topics#changelock', as: :changelock
    end
    resources :posts do
    member do
        get 'upvote' => 'posts#upvote', as: :upvote
        get 'downvote' => 'posts#downvote', as: :downvote
        get 'unupvote' => 'posts#unupvote', as: :unupvote
        get 'undownvote' => 'posts#undownvote', as: :undownvote
    end
    resources :hists
    end
  end
  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
