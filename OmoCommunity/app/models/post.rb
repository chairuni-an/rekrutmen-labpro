class Post < ActiveRecord::Base
    belongs_to :topic
    belongs_to :user
    has_many :hists, dependent: :destroy
    acts_as_votable

    #SEARCH
    def self.search(search)
	  where("title LIKE ? OR content LIKE ?", "%#{search}%", "%#{search}%") 
	end
end
