class AttachmentsController < ApplicationController
	def destroy
		if @topic != nil
			@topic = Topic.find(params[:topic_id])
			@topic.attachments.find(params[:id]).destroy
			redirect_to @topic
		else
			@post= Post.find(params[:post_id])
			@post.attachments.find(params[:id]).destroy
			redirect_to @post.topic
		end
	end
end
