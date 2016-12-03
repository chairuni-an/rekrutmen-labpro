class PostsController < ApplicationController
	before_action :authenticate_user!, except: [:index, :show]
	def index
		@posts = Post.all
	end

	def new
		@topic = Topic.find(params[:topic_id])
		@post = @topic.posts.new
	end


	def create
		@topic = Topic.find(params[:topic_id])
		@post = @topic.posts.new(param_post)
		@post.user_id = current_user.id if current_user
		if @post.save
			if params[:thefiles]
				params[:thefiles].each do |attach|
					@post.attachments.create!(:attachment => attach)
				end
			end
			if current_user != @topic.user	
				@notifpost = @topic.user.notifposts.create!(topic_id: @topic.id, post_id: @post.id, read: false, tipe: "has posted on your thread")
			end
			subsuser=[current_user,@topic.user]
			@topic.posts.each do |f|
				if subsuser.include?(f.user)
    			else	
	    			subsuser.push(f.user)
	    		end
			end	
			subsuser.each do |sul|
				if sul != current_user
					if sul != @topic.user
						sul.notifposts.create!(topic_id: @topic.id, post_id: @post.id, read: false, tipe: "has posted on thread you posted")
					end
				end
			end

			redirect_to @topic
		else
			render 'new'
		end
	end

	def show
		@topic = Topic.find(params[:topic_id])
		@post = @topic.posts.find(params[:id])
	end

	def edit
		@topic = Topic.find(params[:topic_id])
		@post = @topic.posts.find(params[:id])
	end

	def update
		@topic = Topic.find(params[:topic_id])
		@post = @topic.posts.find(params[:id])
		@hist = @post.hists.build
		@hist.Title = @post.title
		@hist.Content = @post.content
		if @post.update(param_post)
			if params[:thefiles]
				params[:thefiles].each do |attach|
					@post.attachments.create!(:attachment => attach)
				end
			end
			redirect_to @topic
		else
			render 'edit'
		end
	end

	def downvote
	  @topic = Topic.find(params[:topic_id])
	  @post = @topic.posts.find(params[:id])
	  @post.disliked_by current_user
	  if current_user != @post.user	
		@notifpostlikes = @post.user.notifpostlikes.create!(uxid: current_user.id,post_id: @post.id, read: false, tipe: "downvote")
	  end
	  redirect_to @topic
	end

	def undownvote
	  @topic = Topic.find(params[:topic_id])
	  @post = @topic.posts.find(params[:id])
	  @post.undisliked_by current_user
	  if current_user != @post.user	
		@notifpostlikes = @post.user.notifpostlikes.create!(uxid: current_user.id,post_id: @post.id, read: false, tipe: "undownvote")
	  end
	  redirect_to @topic
	end

	def upvote
	  @topic = Topic.find(params[:topic_id])
	  @post = @topic.posts.find(params[:id])
	  @post.liked_by current_user
	  if current_user != @post.user	
		@notifpostlikes = @post.user.notifpostlikes.create!(uxid: current_user.id,post_id: @post.id, read: false, tipe: "upvote")
	  end
	  redirect_to @topic
	end

	def unupvote
	  @topic = Topic.find(params[:topic_id])
	  @post = @topic.posts.find(params[:id])
	  @post.unliked_by current_user
	  if current_user != @post.user	
		@notifpostlikes = @post.user.notifpostlikes.create!(uxid: current_user.id, post_id: @post.id, read: false, tipe: "unupvote")
	  end
	  redirect_to @topic
	end

	def destroy
		@topic = Topic.find(params[:topic_id])
		@post = @topic.posts.find(params[:id])
		Notifpost.destroy_all(post_id:@post.id, tipe: "has posted on thread you posted")
		Notifpost.destroy_all(post_id:@post.id, tipe: "has posted on your thread")
		Notifpostlike.destroy_all(post_id: @post.id)
		@post.destroy
		redirect_to @topic
	end
	private
	def param_post
		params.require(:post).permit(:title, :content)
	end

	def param_post
		params.require(:post).permit(:title, :content)
	end 

end
