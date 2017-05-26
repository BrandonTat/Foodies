class Api::BusinessesController < ApplicationController
  def index
    @businesses = Business.all
    if params[:query]
      @businesses = Business.search(params[:query], @businesses)
    end
    render :index
  end

  def show
    @business = Business.find(params[:id])
    render :show
  end
end
