class Post < ActiveRecord::Base
    has_many: hists, dependent: :destroy
    belongs_to :user
    acts_as_votable
end
