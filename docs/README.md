# Foodies
[Heroku link][heroku]

[Trello link][trello]

[heroku]: https://foodies-yelp-clone.herokuapp.com/#/
[trello]: https://trello.com/b/hPfeFHWL/foodies

## Minimum Viable Product

Foodies is a web application inspired by Yelp built using Ruby on Rails
and React/Redux. By the end of Week 9, this app will, at a minimum,
satisfy the following criteria with smooth, bug-free navigation,
adequate seed data and sufficient CSS styling:

### Features and Implementation
1. Hosting on Heroku
2. Production README
3. Authentication
    * New account creation
    * Login/logout for registered users
    * Guest/demo login
4. Business Page
    * Business info (name, address, website, etc.)
    * Business details (hours of operations, reservations, delivery, etc.)
    * Photos pertaining to business (food, environment, menu, etc.)
5. Reviews / Ratings
    * Allow users to rate business
    * Allow users to write reviews about business
    * Display average ratings and reviews for business
6. Map
    * Allow users to search for businesses around specified area.
    * On business show page, display close-up map of business location.

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: /docs/wireframes
[components]: /docs/component-hierarchy.md
[sample-state]: /docs/sample-state.md
[api-endpoints]: /docs/api-endpoints.md
[schema]: /docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Home Page (1.5 days)

**Objective:** Setup functioning home page with links to sign in/sign up

### Phase 3: Business Map (2 days)

**Objective:** Allow user to search for businesses on a map  and to have locations on a map highlighted.

### Phase 4: Filter (1.5 days)

**Objective:** Allow users to filter businesses through map page based on price, type of food and location.

### Phase 5: Business Detail (1.5 days)

**Objective:** Setup a page where business information is displayed. Page will be accessible through links on map page. The business detail page will show price range, reviews, location on map, and possibly photos.

### Phase 6: Reviews (1.5 days)

**Objective:** Allow user to submit reviews and look at other reviews
