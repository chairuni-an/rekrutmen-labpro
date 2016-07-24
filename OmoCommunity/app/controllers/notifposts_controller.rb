class NotifpostsController < ApplicationController
	def index
		@notifposts1 = current_user.notifposts.all
		@notifposts2 = current_user.notifpostlikes.all
		@notifposts3 = @notifposts1 + @notifposts2
		@notifposts = @notifposts3.sort_by(&:created_at)
		@notifposts = @notifposts.reverse
	end

	def changeread
		@notifpost = current_user.notifposts.find(params[:id])
		@notifpost.update_attribute(:read, true)
		if @notifpost.tipe == "is following you"
			redirect_to User.find(@notifpost.post_id)
		else	
			redirect_to Topic.find(@notifpost.topic_id)
		end
	end
end
