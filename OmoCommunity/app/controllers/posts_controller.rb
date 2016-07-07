class PostsController < ApplicationController
    def index
		@posts = Post.all
	end

	def new
		@post = Topic.find(params[:topic_id])
	end


	def create
		@post = Post.new(param_post)
		
		if @post.save
			redirect_to @post
		else
			render 'new'
		end
	end

	def show
		@post = Post.find(params[:id])
	end

	def edit
		@post = Post.find(params[:id])
	end

	def update
		@post = Post.find(params[:id])
		if @post.update(param_post)
			redirect_to @topic
		else
			render 'edit'
		end
	end

	def destroy
		@post = Post.find(params[:id])
		@post.destroy
		redirect_to root_path
	end
	private
	def param_post
		params.require(:post).permit(:title, :content)
	end
end
