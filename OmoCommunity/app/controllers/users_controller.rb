class UsersController < ApplicationController
	before_action :authenticate_user!, except: [:show] 
	def show
		@user = User.find(params[:id])
	end

	def follow
		@user = User.find(params[:id])
		current_user.follow(@user)
		@user.notifposts.create!(topic_id: nil, post_id: current_user.id, read: false, tipe: "is following you")
		redirect_to :back
	end

	def unfollow
		@user = User.find(params[:id])
		current_user.stop_following(@user)
		redirect_to :back
	end

	def showfollowing
		@following = current_user.all_following
	end

	def showfollower
		@follower = current_user.followers
	end

	def showcreatethread
		@trets = current_user.topics
	end
end
