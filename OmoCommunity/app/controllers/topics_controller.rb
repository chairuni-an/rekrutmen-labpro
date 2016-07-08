class TopicsController < ApplicationController
    before_action :authenticate_user!, except: [:index, :show]
    def index
        @topics = Topic.all
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
            @topic = Topic.new
    end

    def create
            @topic = Topic.new(topic_param)
            if @topic.save
                    redirect_to @topic
            else
                    render 'new'
            end
    end
    def destroy
            @topic = Topic.find(params[:id])
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
