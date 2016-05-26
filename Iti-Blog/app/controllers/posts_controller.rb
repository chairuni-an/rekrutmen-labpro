class PostsController < ApplicationController
  def index
    @post = Post.all
  end
  def new
  end
  def create
    @post = Post.new(params.require(:post).permit(:judul,:isi))
    @post.save
    redirect_to @post
  end
  def show
    @post = Post.find(params[:id])
  end
  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    redirect_to posts_path
  end
end
