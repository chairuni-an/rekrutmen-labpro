class HistsController < ApplicationController
    def index
        @post = Hists.find(params[:post_id])
    end
end
