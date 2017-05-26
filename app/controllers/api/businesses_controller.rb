class Api::BusinessesController < ApplicationController
  def index
    @businesses = Business.all
    if params[:query]
      @businesses = Business.search(params[:query], @businesses)
    elsif params[:price] && params[:price].any?{|k, v| v == "true"}
      prices = []
      params[:price].each do |k, v|
        prices.push(k.to_i) if v == "true"
      end

      @businesses = Business.where('price IN (?)', prices)
    end
    render :index
  end

  def show
    @business = Business.find(params[:id])
    render :show
  end
end
