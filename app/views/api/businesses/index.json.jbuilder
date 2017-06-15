@businesses.each do |business|
  json.set! business.id do
    json.partial! 'business', business: business
    json.averageRating business.averageRating
    json.numReviews business.numReviews
  end
end
