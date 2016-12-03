class NotifpostlikesController < ApplicationController
	def index
		@notifpostlikes = current_user.notifpostlikes.all.order("created_at desc")
	end
	def changeread
		@notifpostlike = current_user.notifpostlikes.find(params[:id])
		@notifpostlike.update_attribute(:read, true)
		redirect_to Post.find(@notifpostlike.post_id).topic
	end
end
