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
			redirect_to @topic
		else
			render 'edit'
		end
	end

	def downvote
	  @topic = Topic.find(params[:topic_id])
	  @post = @topic.posts.find(params[:id])
	  @post.disliked_by current_user
	  redirect_to @topic
	end

	def undownvote
	  @topic = Topic.find(params[:topic_id])
	  @post = @topic.posts.find(params[:id])
	  @post.undisliked_by current_user
	  redirect_to @topic
	end

	def upvote
	  @topic = Topic.find(params[:topic_id])
	  @post = @topic.posts.find(params[:id])
	  @post.liked_by current_user
	  redirect_to @topic
	end

	def unupvote
	  @topic = Topic.find(params[:topic_id])
	  @post = @topic.posts.find(params[:id])
	  @post.unliked_by current_user
	  redirect_to @topic
	end

	def destroy
		@topic = Topic.find(params[:topic_id])
		@post = @topic.posts.find(params[:id])
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
class PostsController < ApplicationController
end
