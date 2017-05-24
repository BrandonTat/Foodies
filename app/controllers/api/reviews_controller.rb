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

  def create
    debugger
    @review = Review.create(review_params)
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  private

  def review_params
    params.require(:review).permit(:business_id, :user_id, :review_text, :rating)
  end
end
