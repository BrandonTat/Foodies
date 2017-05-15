# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`

- `GET /api/users/:id`
  - User show page

### Session

- `POST /api/session`
  - Signs users in

- `DELETE /api/session`
  - Signs users out

### Businesses

- `GET /api/businesses`
  - Businesses index

-  `GET /api/businesses/:id`
  - Business show page

### Reviews

- `GET /api/businesses/:businessId/reviews`
  - Business reviews index

- `POST /api/businesses/:businessId/reviews`
  - Creates review for business

- `PATCH /api/reviews/:id`
  - Update business review

- `DELETE /api/reviews/:id`
  - Delete business review

- `GET /api/users/:userId/reviews`
  - User reviews index

### Bookmarks
- `GET /api/users/:userId/bookmarks`
 - User bookmarks index
