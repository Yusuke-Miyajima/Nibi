Rails.application.routes.draw do
  get 'top'=>'homes#top'
  get 'shop'=>'homes#shop'
  get 'work'=>'homes#work'
  get 'playlist'=>'homes#playlist'

  root to: "homes#top"
end
