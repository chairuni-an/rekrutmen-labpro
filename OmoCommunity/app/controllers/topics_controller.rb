class TopicsController < ApplicationController
	before_action :authenticate_user!, except: [:index, :show] 
	def index
	  @topicsx = Topic.all
	  if params[:search]
	    @topics1 = Topic.search(params[:search])
	    @topicsx.each do |top|
	    	@posx = top.posts.search(params[:search])
	    	if  !@posx.empty?
	    		@posx.each do |posxx|
	    			if @topics1.include?(Topic.find(posxx.topic_id))
	    			else	
		    			@topics1.push(Topic.find(posxx.topic_id))
		    		end
	    		end
	    	end
	    end
	    @topics = @topics1
	  else
	    @topics = Topic.all.order("created_at DESC")
	  end
	end

	def edit
		@topic = Topic.find(params[:id])
	end

	def update
		@topic = Topic.find(params[:id])
		if @topic.update(topic_param)
			redirect_to @topic
		else
			render 'edit'
		end
	end

	def new
		@topic = current_user.topics.build
	end

	def create
		@topic = current_user.topics.build(topic_param)
		if @topic.save
			redirect_to @topic
		else
			render 'new'
		end
	end

	def changelock
		@topic = current_user.topics.find(params[:id])
		if @topic.lock
			@topic.update_attribute(:lock, false)
		else
			@topic.update_attribute(:lock, true)
		end
		redirect_to @topic
	end

	def destroy
		@topic = current_user.topics.find(params[:id])
		@topic.destroy
		
		redirect_to root_path
	end

	def show
		@topic = Topic.find(params[:id])
	end

	private
	def topic_param
		params.require(:topic).permit(:title, :content)
	end
end
