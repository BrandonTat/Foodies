class Api::ReviewsController < ApplicationController
  def index
    business = Business.find(params[:business_id])
    @reviews = business.reviews
    render :index
  end

  def show
    @review = Review.find_by(business_id: params[:business_id], id: params[:id])
    render :show
  end
end
