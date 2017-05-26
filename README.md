# Foodies

[Heroku Live][heroku]

[heroku]: https://foodies-yelp-clone.herokuapp.com/#/

Foodies is a full-stack web application inspired by Yelp, utilizing
Ruby on Rails for the backend, a PostgreSQL database, and a React with Redux
architectural framework for the front end. Foodies helps users find
restaurants located within San Francisco, CA.

![home page](readme_photos/home-page.png)

Please see the [docs][docs] folder for a look at the design documentation.

[docs]: https://github.com/BrandonTat/yelp_clone/tree/master/docs

## Features and Implementation

### Businesses

Foodies allows users to search for businesses by name and/or filter
businesses based on price. Each business's information is stored in
a `businesses` table. Some of the columns within the table are `name`,
`price`, and `address`. Please see the [db schema][schema] for an in
depth look at the database.

[schema]: /docs/schema.md

A list of businesses are stored in the state as an object, where the key
of the object is the business's `id` and the value is the business object.

* `BusinessIndex`: This component is displayed after the user searches
for a restaurant. Based on the search query, only the filtered restaurants will be displayed on the map. If no search query is entered, all restaurants will be loaded. The map is rendered using Google Maps API and is centered on San Francisco. Each business in the left column is a link that redirects to the business's show page.

![business index page](readme_photos/business-index-page.png)

* `BusinessShow`: This component is displayed after the user clicks on a certain business in the `BusinessIndex` component. The component displays more detailed about the business and also contains a `ReviewIndex` and a `ReviewForm` component. The "Post Review" button loads a modal that allows users to post a review. The review allows users to give a rating, description and an optional photo if desired.

![business show page](readme_photos/business-show.png)

### Search Bar & Filtering

Users can search for businesses by name. Search results will return businesses that have the specified query within the business name. Additionally users can filter businesses based on pricing.

* Search is handled on the backend, through the `BusinessesController`.
When a user searches for a business name the query is passed to the  `BusinessesController`. The `BusinessesController` also handles filtering the businesses based on price filters. `params[:price]` represents an object where the keys represent the price, ranging from one to four and the are boolean values representing whether a price filter is applied.

```ruby
#businesses_controller
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
```

* The `BusinessesController` then makes a call to the business model where the results are filtered based on the query.

```ruby
#business.rb
def self.search(query, businesses)
  processed_query = "%" + query.split.join("%") + "%"
  businesses.where("name ILIKE :query", query: processed_query)
end
```

## Future Directions for the Project

### User Profiles

Users will be able to view their personal profile, which will contain a
profile picture, past reviews, and any restaurants they have bookmarked.
In order to implement this I plan to add more columns to the `Users` table.
Additionally I plan to add a show action to the `UsersController` that will
display a user's profile page.

### Adding Businesses

Users will be able to add businesses. I plan to implement this by adding a create action to the `BusinessesController`. Additionally I plan to allow a user to interact with a map to get the address of the business.
