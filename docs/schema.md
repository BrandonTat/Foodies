# Schema Information

## Users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## Businesses
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
name           | string    | not null
address        | string    | not null
city           | string    | not null
state          | string    | not null
zip            | string    | not null
price          | string    | not null, inclusive ['$', '$$', '$$$', '$$$$']
image_url      | string    | not null
lat            | float     | not null
long           | float     | not null

## Rating & Reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
business_id | integer   | not null, foreign key (references businesses), indexed
reviewer_id | integer   | not null, foreign key (references users), indexed
review_text | text      | not null
review_photo| string    |
rating      | integer   | not null, inclusive [1, 2, 3, 4, 5]
price       | string    | not null, inclusive ['$', '$$', '$$$', '$$$$']

## Photos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references user), indexed
business_id | integer   | not null, foreign key (references businesses), indexed
review_id   | integer   | foreign key (references reviews), indexed
url         | string    | not null
caption     | string    |

## Bookmarks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references user), indexed
business_id | integer   | not null, foreign key (references businesses), indexed
