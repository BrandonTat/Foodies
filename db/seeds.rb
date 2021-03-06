# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Business.destroy_all
Review.destroy_all
Category.destroy_all
Tag.destroy_all

guest = User.create!(username: "guest", password: "password")
u1 = User.create!(username: "Michael", password: "password")
u2 = User.create!(username: "Dwight", password: "password")
u3 = User.create!(username: "Pam", password: "password")
u4 = User.create!(username: "Creed", password: "password")
u5 = User.create!(username: "Jim", password: "password")
u6 = User.create!(username: "Angela", password: "password")
u7 = User.create!(username: "Kevin", password: "password")
u8 = User.create!(username: "Oscar", password: "password")
u9 = User.create!(username: "Andy", password: "password")

c1 = Category.create!(category_type: "Japanese")
c2 = Category.create!(category_type: "Asian Fusion")
c3 = Category.create!(category_type: "Chinese")
c4 = Category.create!(category_type: "Chicken")
c5 = Category.create!(category_type: "Noodles")
c6 = Category.create!(category_type: "Hot Pot")
c7 = Category.create!(category_type: "Taiwanese")
c8 = Category.create!(category_type: "Mexican")
c9 = Category.create!(category_type: "Seafood")
c10 = Category.create!(category_type: "Sandwiches")
c11 = Category.create!(category_type: "Korean")
c12 = Category.create!(category_type: "Italian")
c13 = Category.create!(category_type: "American")
c14 = Category.create!(category_type: "Burmese")
c15 = Category.create!(category_type: "Mediterranean")
c16 = Category.create!(category_type: "Dessert")

b1 = Business.create!(
  name: "Tropisueno",
  address: "75 Yerba Buena Ln",
  city: "San Francisco",
  state: "CA",
  zip: "94103",
  price: 2,
  image_url: "https://res.cloudinary.com/dkdpoayma/image/upload/c_fill,h_350,w_350/v1495816945/food-salad-healthy-lunch_imiwrr.jpg",
  lat: 37.785349,
  lng: -122.403828,
  mon: "10:00 am - 10:00 pm",
  tue: "10:00 am - 10:00 pm",
  wed: "10:00 am - 10:00 pm",
  thu: "10:00 am - 10:30 pm",
  fri: "10:00 am - 10:30 pm",
  sat: "11:00 am - 10:30 pm",
  sun: "11:00 am - 10:00 pm",
  phone_number: "(415) 243-0299"
)

b2 = Business.create!(
  name: "Nopa",
  address: "560 Divisadero St",
  city: "San Francisco",
  state: "CA",
  zip: "94117",
  price: 3,
  image_url: "https://res.cloudinary.com/dkdpoayma/image/upload/c_fill,h_350,w_350/v1495407315/brunch_v0cewv.jpg",
  lat: 37.774901,
  lng: -122.437509,
  mon: "5:00 pm - 12:00 am",
  tue: "5:00 pm - 12:00 am",
  wed: "5:00 pm - 12:00 am",
  thu: "5:00 pm - 12:00 am",
  fri: "5:00 pm - 1:00 am",
  sat: "11:00 am - 1:00 am",
  sun: "11:00 am - 12:00 am",
  phone_number: "(415) 864-8643"
)

b3 = Business.create!(
  name: "The Stinking Rose",
  address: "325 Columbus Ave",
  city: "San Francisco",
  state: "CA",
  zip: "94133",
  price: 2,
  image_url: "https://res.cloudinary.com/dkdpoayma/image/upload/c_fill,h_350,q_80,w_350/v1495413276/pexels-photo-106185_drcvph.jpg",
  lat: 37.798125,
  lng: -122.407543,
  mon: "11:30 am - 10:00 pm",
  tue: "11:30 am - 10:00 pm",
  wed: "11:30 am - 10:00 pm",
  thu: "11:30 am - 10:00 pm",
  fri: "11:30 am - 10:00 pm",
  sat: "11:30 am - 10:00 pm",
  sun: "11:30 am - 10:00 pm",
  phone_number: "(415) 781-7673"
)

b4 = Business.create!(
  name: "Bi-Rite Creamery",
  address: "3692 18th St",
  city: "San Francisco",
  state: "CA",
  zip: "94110",
  price: 1,
  image_url: "https://res.cloudinary.com/dkdpoayma/image/upload/c_fill,h_350,w_350/v1495407314/food-ice-cream_wvsst4.jpg",
  lat: 37.761623,
  lng: -122.425742,
  mon: "11:00am - 10:00pm",
  tue: "11:00am - 10:00pm",
  wed: "11:00am - 10:00pm",
  thu: "11:00am - 10:00pm",
  fri: "11:00am - 10:00pm",
  sat: "11:00am - 10:00pm",
  sun: "11:00am - 10:00pm",
  phone_number: "(415) 626-5600"
)

b5 = Business.create!(
  name: "Sushirrito",
  address: "59 New Montgomery St",
  city: "San Francisco",
  state: "CA",
  zip: "94105",
  price: 2,
  image_url: "https://res.cloudinary.com/dkdpoayma/image/upload/c_fill,h_350,w_350/v1495410662/sushiritto_csfel9.jpg",
  lat: 37.788139,
  lng: -122.401021,
  mon: "11:00 am - 4:00 pm",
  tue: "11:00 am - 4:00 pm",
  wed: "11:00 am - 4:00 pm",
  thu: "11:00 am - 4:00 pm",
  fri: "11:00 am - 4:00 pm",
  sat: "Closed",
  sun: "Closed",
  phone_number: "(415) 495-7655"
)

b6 = Business.create!(
  name: "Super Duper Burgers",
  address: "721 Market St",
  city: "San Francisco",
  state: "CA",
  zip: "94103",
  price: 2,
  image_url: "https://res.cloudinary.com/dkdpoayma/image/upload/c_fill,h_350,w_350/v1495412572/pexels-photo-70497_xcrruw.jpg",
  lat: 37.786967,
  lng: -122.403995,
  mon: "8:00 am - 11:00 pm",
  tue: "8:00 am - 11:00 pm",
  wed: "8:00 am - 11:00 pm",
  thu: "8:00 am - 11:30 pm",
  fri: "8:00 am - 11:30 pm",
  sat: "10:30 am - 11:30 pm",
  sun: "10:30 am - 10:00 pm",
  phone_number: "(415) 538-3437"
)

b7 = Business.create!(
  name: "Little Star Pizza",
  address: "846 Divisadero St",
  city: "San Francisco",
  state: "CA",
  zip: "94117",
  price: 2,
  image_url: "https://res.cloudinary.com/dkdpoayma/image/upload/c_fill,h_350,w_350/v1495411483/pizza2_f81pvn.jpg",
  lat: 37.777529,
  lng: -122.438003,
  mon: "5:00 pm - 9:30 pm",
  tue: "5:00 pm - 9:30 pm",
  wed: "5:00 pm - 9:30 pm",
  thu: "5:00 pm - 9:30 pm",
  fri: "4:00 pm - 10:30 pm",
  sat: "3:00 pm - 10:30 pm",
  sun: "3:00 pm - 9:30 pm",
  phone_number: "(415) 441-1118"
)

b8 = Business.create!(
  name: "Udon Mugizo",
  address: "1581 Webster St",
  city: "San Francisco",
  state: "CA",
  zip: "94115",
  price: 2,
  image_url: "https://res.cloudinary.com/dkdpoayma/image/upload/c_fill,h_350,w_350/v1495410886/udon_w2tvjf.jpg",
  lat: 37.785046,
  lng: -122.432093,
  mon: "11:30 am - 3:00 pm, 5:30 pm - 9:30 pm",
  tue: "11:30 am - 3:00 pm, 5:30 pm - 9:30 pm",
  wed: "11:30 am - 3:00 pm, 5:30 pm - 9:30 pm",
  thu: "11:30 am - 3:00 pm, 5:30 pm - 9:30 pm",
  fri: "11:30 am - 3:00 pm, 5:30 pm - 9:30 pm",
  sat: "11:30 am - 3:00 pm, 5:00 pm - 9:30 pm",
  sun: "11:30 am - 3:00 pm, 5:00 pm - 9:00 pm",
  phone_number: "(415) 931-3118"
)

b9 = Business.create!(
  name: "Bella Trattoria",
  address: "3854 Geary Blvd",
  city: "San Francisco",
  state: "CA",
  zip: "94118",
  price: 2,
  image_url: "https://res.cloudinary.com/dkdpoayma/image/upload/c_fill,h_350,w_350/v1495407314/lobster_s9v3we.jpg",
  lat: 37.781364,
  lng: -122.460937,
  mon: "5:00 pm - 9:30 pm",
  tue: "5:00 pm - 9:30 pm",
  wed: "5:00 pm - 9:30 pm",
  thu: "5:00 pm - 9:30 pm",
  fri: "12:00 pm - 3:00 pm, 5:00 pm - 10:30 pm",
  sat: "5:00 pm - 10:30 pm",
  sun: "12:00 pm - 9:00 pm",
  phone_number: "(415) 221-0305"
)

b10 = Business.create!(
  name: "ju-ni",
  address: "1335 Fulton St",
  city: "San Francisco",
  state: "CA",
  zip: "94117",
  price: "4",
  image_url: "https://res.cloudinary.com/dkdpoayma/image/upload/v1495411029/sushi_pvilca.jpg",
  lat: 37.776589,
  lng: -122.438833,
  mon: "6:00 pm - 10:30 pm ",
  tue: "6:00 pm - 10:30 pm ",
  wed: "6:00 pm - 10:30 pm ",
  thu: "6:00 pm - 10:30 pm ",
  fri: "6:00 pm - 10:30 pm ",
  sat: "6:00 pm - 10:30 pm ",
  sun: "6:00 pm - 10:30 pm ",
  phone_number: "(415) 655-9924"
)

b11 = Business.create!(
  name: "Don Pisto's",
  address: "510 Union St",
  city: "San Francisco",
  state: "CA",
  zip: "94133",
  price: 2,
  image_url: "https://res.cloudinary.com/dkdpoayma/image/upload/v1495413442/don_oihwwv.jpg",
  lat: 37.800742,
  lng: -122.407954,
  mon: "5:30 pm - 11:00 pm",
  tue: "5:30 pm - 11:00 pm",
  wed: "5:30 pm - 11:00 pm",
  thu: "5:30 pm - 11:00 pm",
  fri: "5:30 pm - 11:00 pm",
  sat: "11:00 am - 11:00 pm",
  sun: "10:00 am - 10:00 pm",
  phone_number: "(415) 395-0939"
)

b12 = Business.create!(
  name: "Tacorea",
  address: "809 Bush St",
  city: "San Francisco",
  state: "CA",
  zip: "94108",
  price: 1,
  image_url: "https://res.cloudinary.com/dkdpoayma/image/upload/v1495413380/tacorea_jipqnd.jpg",
  lat: 37.789745,
  lng: -122.410579,
  mon: "11:30 am - 3:00 pm, 6:00 pm - 9:00 pm",
  tue: "11:30 am - 3:00 pm, 6:00 pm - 9:00 pm",
  wed: "11:30 am - 3:00 pm, 6:00 pm - 9:00 pm",
  thu: "11:30 am - 3:00 pm, 6:00 pm - 9:00 pm",
  fri: "11:30 am - 3:00 pm, 6:00 pm - 9:00 pm",
  sat: "11:30 am - 3:00 pm, 6:00 pm - 9:00 pm",
  sun: "11:30 am - 3:00 pm, 6:00 pm - 9:00 pm",
  phone_number: "(415) 885-1325"
)

b13 = Business.create!(
  name: "The Chairman",
  address: "670 Larkin St",
  city: "San Francisco",
  state: "CA",
  zip: "94109",
  price: 1,
  image_url: "https://res.cloudinary.com/dkdpoayma/image/upload/v1495412842/SF-Food-Truck-The-Chairman-Food_looptd.jpg",
  lat: 37.784069,
  lng: -122.417594,
  mon: "11:30 am - 9:00 pm",
  tue: "11:30 am - 9:00 pm",
  wed: "11:30 am - 9:00 pm",
  thu: "11:30 am - 9:00 pm",
  fri: "11:30 am - 9:00 pm",
  sat: "11:30 am - 9:00 pm",
  sun: "11:30 am - 7:00 pm",
  phone_number: "(415) 813-8800"
)

b14 = Business.create!(
  name: "Sotto Mare",
  address: "552 Green St",
  city: "San Francisco",
  state: "CA",
  zip: "94133",
  price: 2,
  image_url: "https://res.cloudinary.com/dkdpoayma/image/upload/v1495413220/food-dinner-pasta-spaghetti-8500_h4fcnx.jpg",
  lat: 37.799768,
  lng: -122.408316,
  mon: "11:30 am - 9:30 pm",
  tue: "11:30 am - 9:30 pm",
  wed: "11:30 am - 9:30 pm",
  thu: "11:30 am - 9:30 pm",
  fri: "11:30 am - 9:30 pm",
  sat: "11:30 am - 9:30 pm",
  sun: "Closed",
  phone_number: "(415) 398-3181"
)

b15 = Business.create!(
  name: "El Farolito",
  address: "2779 Mission St",
  city: "San Francisco",
  state: "CA",
  zip: "94110",
  price: 1,
  image_url: "https://res.cloudinary.com/dkdpoayma/image/upload/v1495412918/348s_mi0ez3.jpg",
  lat: 37.752656,
  lng: -122.418103,
  mon: "10:00 am - 2:30 am",
  tue: "10:00 am - 2:30 am",
  wed: "10:00 am - 2:30 am",
  thu: "10:00 am - 2:30 am",
  fri: "10:00 am - 3:30 am",
  sat: "10:00 am - 3:30 am",
  sun: "10:00 am - 2:30 am",
  phone_number: "(415) 824-7877"
)

b16 = Business.create!(
  name: "Beretta",
  address: "1199 Valencia St",
  city: "San Francisco",
  state: "CA",
  zip: "94110",
  price: 2,
  image_url: "https://res.cloudinary.com/dkdpoayma/image/upload/v1495413066/beretta_bce1ph.jpg",
  lat: 37.753815,
  lng: -122.420729,
  mon: "5:30 pm - 1:00 am",
  tue: "5:30 pm - 1:00 am",
  wed: "5:30 pm - 1:00 am",
  thu: "5:30 pm - 1:00 am",
  fri: "5:30 pm - 1:00 am",
  sat: "11:00 am - 1:00 am",
  sun: "11:00 am - 1:00 am",
  phone_number: "(415) 695-1199"
)

b17 = Business.create!(
  name: "Tasty Pot",
  address: "815 Clement St",
  city: "San Francisco",
  state: "CA",
  zip: "94118",
  price: 2,
  image_url: "https://res.cloudinary.com/dkdpoayma/image/upload/v1495411211/tasty_pot_bldnuc.jpg",
  lat: 37.782578,
  lng: -122.4680006,
  mon: "11:30 am - 3:00 pm, 5:00 pm - 10:00 pm",
  tue: "11:30 am - 3:00 pm, 5:00 pm - 10:00 pm",
  wed: "11:30 am - 3:00 pm, 5:00 pm - 10:00 pm",
  thu: "11:30 am - 3:00 pm, 5:00 pm - 10:00 pm",
  fri: "11:30 am - 3:00 pm, 5:00 pm - 10:00 pm",
  sat: "11:30 am - 11:00 pm",
  sun: "11:30 am - 10:00 pm",
  phone_number: "(415) 666-3888"
)

b18 = Business.create!(
  name: "Golden Boy Pizza",
  address: "542 Green St",
  city: "San Francisco",
  state: "CA",
  zip: "94133",
  price: 1,
  image_url: "https://res.cloudinary.com/dkdpoayma/image/upload/v1495411433/pizza_wtndlw.jpg",
  lat: 37.799715,
  lng: -122.408071,
  mon: "11:30 am - 12:30 am",
  tue: "11:30 am - 12:30 am",
  wed: "11:30 am - 12:30 am",
  thu: "11:30 am - 12:30 am",
  fri: "11:30 am - 2:30 am",
  sat: "11:30 am - 2:30 am",
  sun: "11:30 am - 12:30 am",
  phone_number: "(415) 982-9738"
)

b19 = Business.create!(
  name: "Dragon Beaux",
  address: "5700 Geary Blvd",
  city: "San Francisco",
  state: "CA",
  zip: "94121",
  price: 2,
  image_url: "https://res.cloudinary.com/dkdpoayma/image/upload/v1495411120/chinese_s4nsjs.jpg",
  lat: 37.780500,
  lng: -122.480722,
  mon: "11:00 am - 2:30 pm, 5:30 pm - 10:00 pm",
  tue: "11:00 am - 2:30 pm, 5:30 pm - 10:00 pm",
  wed: "11:00 am - 2:30 pm, 5:30 pm - 10:00 pm",
  thu: "11:00 am - 2:30 pm, 5:30 pm - 10:00 pm",
  fri: "11:00 am - 2:30 pm, 5:30 pm - 10:00 pm",
  sat: "10:00 am - 3:00 pm, 5:30 pm - 10:00 pm",
  sun: "11:00 am - 2:30 pm, 5:30 pm - 10:00 pm",
  phone_number: "(415) 333-8899"
)

b20 = Business.create!(
  name: "In-N-Out Burger",
  address: "333 Jefferson St",
  city: "San Francisco",
  state: "CA",
  zip: "94133",
  price: 1,
  image_url: "https://res.cloudinary.com/dkdpoayma/image/upload/v1495407314/burgers_myej8b.jpg",
  lat: 37.807730,
  lng: -122.418533,
  mon: "10:30 am - 1:00 am",
  tue: "10:30 am - 1:00 am",
  wed: "10:30 am - 1:00 am",
  thu: "10:30 am - 1:00 am",
  fri: "10:30 am - 1:30 am",
  sat: "10:30 am - 1:30 am",
  sun: "10:30 am - 1:00 am",
  phone_number: "(800) 786-1000"
)

b21 = Business.create!(
  name: "Burma Superstar",
  address: "309 Clement St",
  city: "San Francisco",
  state: "CA",
  zip: "94118",
  price: 2,
  image_url: "https://res.cloudinary.com/dkdpoayma/image/upload/v1495412524/pexels-photo-410648_zg1ecr.jpg",
  lat: 37.78282831,
  lng: -122.462555,
  mon: "11:30 am - 3:00 pm, 5:00 pm - 9:30 pm",
  tue: "11:30 am - 3:00 pm, 5:00 pm - 9:30 pm",
  wed: "11:30 am - 3:00 pm, 5:00 pm - 9:30 pm",
  thu: "11:30 am - 3:00 pm, 5:00 pm - 9:30 pm",
  fri: "11:30 am - 3:00 pm, 5:00 pm - 10:00 pm",
  sat: "11:30 am - 3:00 pm, 5:00 pm - 10:00 pm",
  sun: "11:30 am - 3:00 pm, 5:00 pm - 9:30 pm",
  phone_number: "(415) 387-2147"
)

b22 = Business.create!(
  name: "House of Prime Rib",
  address: "1906 Van Ness Ave",
  city: "San Francisco",
  state: "CA",
  zip: "94109",
  price: 3,
  image_url: "https://res.cloudinary.com/dkdpoayma/image/upload/v1495412140/american_jhuq93.jpg",
  lat: 37.793452,
  lng: -122.422543,
  mon: "5:30 pm - 10:00 pm",
  tue: "5:30 pm - 10:00 pm",
  wed: "5:30 pm - 10:00 pm",
  thu: "5:30 pm - 10:00 pm",
  fri: "5:00 pm - 10:00 pm",
  sat: "4:00 pm - 10:00 pm",
  sun: "4:00 pm - 10:00 pm",
  phone_number: "(415) 885-4605"
)

b23 = Business.create!(
  name: "Alexander’s Steakhouse",
  address: "448 Brannan St",
  city: "San Francisco",
  state: "CA",
  zip: "94107",
  price: 4,
  image_url: "https://res.cloudinary.com/dkdpoayma/image/upload/v1495411352/steak_c9fbxs.jpg",
  lat: 37.779306,
  lng: -122.395699,
  mon: "5:30 pm - 9:00 pm",
  tue: "5:30 pm - 9:00 pm",
  wed: "5:30 pm - 9:00 pm",
  thu: "5:30 pm - 9:00 pm",
  fri: "5:30 pm - 10:00 pm",
  sat: "5:30 pm - 10:00 pm",
  sun: "5:30 pm - 9:00 pm",
  phone_number: "(415) 495-1111"
)

b24 = Business.create!(
  name: "The Halal Guys",
  address: "340 O'Farrell St",
  city: "San Francisco",
  state: "CA",
  zip: "94102",
  price: 2,
  image_url: "https://res.cloudinary.com/dkdpoayma/image/upload/v1495412460/pexels-photo-48726_idqy2t.jpg",
  lat: 37.786284,
  lng: -122.410506,
  mon: "10:00 am - 2:00 am",
  tue: "10:00 am - 2:00 am",
  wed: "10:00 am - 2:00 am",
  thu: "10:00 am - 4:00 am",
  fri: "10:00 am - 4:00 am",
  sat: "10:00 am - 4:00 am",
  sun: "10:00 am - 2:00 am",
  phone_number: "(415) 549-3454"
)

b25 = Business.create!(
  name: "Gary Danko",
  address: "800 N Point St",
  city: "San Francisco",
  state: "CA",
  zip: "94109",
  price: 4,
  image_url: "https://res.cloudinary.com/dkdpoayma/image/upload/v1495412342/pexels-photo-323682_hnovjv.jpg",
  lat: 37.805846,
  lng: -122.420607,
  mon: "5:30 pm - 10:00 pm",
  tue: "5:30 pm - 10:00 pm",
  wed: "5:30 pm - 10:00 pm",
  thu: "5:30 pm - 10:00 pm",
  fri: "5:30 pm - 10:00 pm",
  sat: "5:30 pm - 10:00 pm",
  sun: "5:30 pm - 10:00 pm",
  phone_number: "(415) 749-2060"
)

b26 = Business.create!(
  name: "The House",
  address: "1230 Grant Ave",
  city: "San Francisco",
  state: "CA",
  zip: "94133",
  price: 3,
  image_url: "https://res.cloudinary.com/dkdpoayma/image/upload/v1495412246/noodles_kjwjfp.jpg",
  lat: 37.798470,
  lng: -122.407051,
  mon: "11:30 am - 3:00 pm, 5:30 pm - 10:00 pm",
  tue: "11:30 am - 3:00 pm, 5:30 pm - 10:00 pm",
  wed: "11:30 am - 3:00 pm, 5:30 pm - 10:00 pm",
  thu: "11:30 am - 3:00 pm, 5:30 pm - 10:00 pm",
  fri: "11:30 am - 3:00 pm, 5:30 pm - 10:00 pm",
  sat: "11:30 am - 3:00 pm, 5:30 pm - 10:00 pm",
  sun: "11:30 am - 3:00 pm, 5:30 pm - 10:00 pm",
  phone_number: "(415) 986-8612"
)

b27 = Business.create!(
  name: "Kokkari Estiatorio",
  address: "200 Jackson St",
  city: "San Francisco",
  state: "CA",
  zip: "94111",
  price: 3,
  image_url: "https://res.cloudinary.com/dkdpoayma/image/upload/v1495412044/pexels-photo-54296_ogakz8.jpg",
  lat: 37.797030,
  lng:  -122.399956,
  mon: "11:30 am - 2:30 pm, 5:30 pm - 10:00 pm",
  tue: "11:30 am - 2:30 pm, 5:30 pm - 10:00 pm",
  wed: "11:30 am - 2:30 pm, 5:30 pm - 10:00 pm",
  thu: "11:30 am - 2:30 pm, 5:30 pm - 10:00 pm",
  fri: "11:30 am - 2:30 pm, 5:30 pm - 10:00 pm",
  sat: "5:00 pm - 11:00 pm",
  sun: "5:00 pm - 10:00 pm",
  phone_number: "(415) 981-0983"
)

b28 = Business.create!(
  name: "Hog Island Oyster Co.",
  address: "1 Ferry Bldg",
  city: "San Francisco",
  state: "CA",
  zip: "94111",
  price: 2,
  image_url: "https://res.cloudinary.com/dkdpoayma/image/upload/v1495413276/pexels-photo-106185_drcvph.jpg",
  lat: 37.795570,
  lng: -122.393321,
  mon: "11:00 am - 9:00 pm",
  tue: "11:00 am - 9:00 pm",
  wed: "11:00 am - 9:00 pm",
  thu: "11:00 am - 9:00 pm",
  fri: "11:00 am - 9:00 pm",
  sat: "11:00 am - 9:00 pm",
  sun: "11:00 am - 9:00 pm",
  phone_number: "(415) 391-7117"
)

b29 = Business.create!(
  name: "San Tung",
  address: "1031 Irving St",
  city: "San Francisco",
  state: "CA",
  zip: "94122",
  price: 2,
  image_url: "https://res.cloudinary.com/dkdpoayma/image/upload/v1495410802/san_tung_njkovv.jpg",
  lat: 37.763696,
  lng: -122.469001,
  mon: "11:00 am - 3:00 pm, 5:00 pm - 9:30 pm",
  tue: "11:00 am - 3:00 pm, 5:00 pm - 9:30 pm",
  wed: "Closed",
  thu: "11:00 am - 3:00 pm, 5:00 pm - 9:30 pm",
  fri: "11:00 am - 3:00 pm, 5:00 pm - 9:30 pm",
  sat: "11:00 am - 3:00 pm, 5:00 pm - 9:30 pm",
  sun: "11:00 am - 3:00 pm, 5:00 pm - 9:30 pm",
  phone_number: "(415) 242-0828"
)

b30 = Business.create!(
  name: "Mensho Tokyo",
  address: "672 Geary St",
  city: "San Francisco",
  state: "CA",
  zip: "94102",
  price: 2,
  image_url: "https://res.cloudinary.com/dkdpoayma/image/upload/v1495410976/japanese_lzkdhe.jpg",
  lat: 37.7786599,
  lng: -122.414305,
  mon: "Closed",
  tue: "5:00 pm - 11:30 pm",
  wed: "5:00 pm - 11:30 pm",
  thu: "5:00 pm - 11:30 pm",
  fri: "5:00 pm - 11:30 pm",
  sat: "5:00 pm - 11:30 pm",
  sun: "5:00 pm - 11:30 pm",
  phone_number: "(415) 800-8345"
)

review_array = [
  {"rating" => 1, "review" => "The entire kitchen and wait staff saw an ice cream truck and ran outside, leaving me alone in the restaurant. 10 minutes later they all came back with ice cream cones. I still cant believe this actually happened." },
  {"rating" => 2, "review" => "They didn't have any avocado...enough said." },
  {"rating" => 3, "review" => "My food tasted like it had been sitting out for half an hour. On another note, what an awesome staff manning the orders. Keep up the smiles!" },
  {"rating" => 4, "review" => "Definitely a touristy spot. They can get kinda busy and don't have a ton of seating, but they do have a ton of delicious food. It helps that the food is great." },
  {"rating" => 5, "review" => "Service here is fast, friendly and efficient- in a fast casual atmosphere. If you don't walk in expecting a fine dining experience, you will leave with your belly satisfied and you happy. It's cheap and the portions are generous." },

  {"rating" => 1, "review" => "I almost didn't want to write a review about this amazing restaurant because I didn't want to risk too many people hearing about this place. So I decided to give it one star instead." },
  {"rating" => 2, "review" => "This was just so-so. I had high expectations for this place given its location in a foodie city, and a let down is an understatement. The food smelled great, but the taste was lacking." },
  {"rating" => 3, "review" => "The place is tiny, there is no sign outside so you can easily miss it.  The food was not the greatest, it was just ok.  On the other hand, the guacamole was really good. The food was way too overpriced for the size and flavor!" },
  {"rating" => 4, "review" => "Stellar food and great service. Thank you :) I've ordered takeout from them numerous times and have been very pleased every time." },
  {"rating" => 5, "review" => "This place changed my life. " },

  {"rating" => 1, "review" => "Found a fingernail in my food. The one star is for the waitress who seemed more traumatized than we were." },
  {"rating" => 2, "review" => "I ate here three hours ago and now have diarrhea." },
  {"rating" => 3, "review" => "The food is decent but nothing super special." },
  {"rating" => 4, "review" => "Almost better than Taco Bell." },
  {"rating" => 5, "review" => "Their food definitely hit the spot, and I'd come back again to try other dishes.  They keep busy, so go early and beware of the line.  Definitely a unique restaurant with a fun fusion twist on what they serve." },

  {"rating" => 1, "review" => "Highlight of the meal was a bus boy smuggling us two cheese sticks from the bar as we waited close to an hour between courses.The cheese sticks were delish." },
  {"rating" => 2, "review" => "Wasn't much of a fan of the food. It's greasy and heavy and super spicy, and most of the flavors seem to be the same." },
  {"rating" => 3, "review" => "Come here for big portions and good overall value but don't expect food that is super amazing. Definitely a solid 3 stars." },
  {"rating" => 4, "review" => "Spent my cheat day here, and it was worth it." },
  {"rating" => 5, "review" => "Come early to grab seats! Great service! The workers were very attentive." }
]


user_array = [
  guest, u1, u2, u3, u4, u5, u6, u7, u8, u9
]

business_array = [
  b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15,
  b16, b17, b18, b19, b20, b21, b22, b23, b24, b25, b26, b27, b28,
  b29, b30
]

Business.all.each do |business|

  (5..10).to_a.sample.times do |i|
    user = user_array.sample
    rating_review = review_array.sample
    photo = business_array.sample.image_url
    review = Review.create!(business_id: business.id, user_id: user.id, review_text: rating_review["review"], rating: rating_review["rating"], photo_url: photo)
  end
end

array_japanese = [b1, b3, b4, b5]
array_asian_fusion = [b1, b2, b12, b24]
array_chinese = [b2]
array_chicken = [b2, b17]
array_noodles = [b3, b4]
array_hot_pot = [b6, b7]
array_taiwanese = [b7, b8]
array_mexican = [b9, b10, b11, b12]
array_seafood = [b9, b13, b14, b26]
array_sandwiches = [b9]
array_korean = [b12]
array_italian = [b13, b14, b15, b16, b17, b18]
array_american = [b19, b20, b22, b23, b27]
array_burmese = [b21]
array_mediterranean = [b22, b25]
array_dessert = [b30]

array_japanese.each do |business|
  Tag.create!(business_id: business.id, category_id: c1.id)
end

array_asian_fusion.each do |business|
  Tag.create!(business_id: business.id, category_id: c2.id)
end

array_chinese.each do |business|
  Tag.create!(business_id: business.id, category_id: c3.id)
end

array_chicken.each do |business|
  Tag.create!(business_id: business.id, category_id: c4.id)
end

array_noodles.each do |business|
  Tag.create!(business_id: business.id, category_id: c5.id)
end
array_hot_pot.each do |business|
  Tag.create!(business_id: business.id, category_id: c6.id)
end
array_taiwanese.each do |business|
  Tag.create!(business_id: business.id, category_id: c7.id)
end
array_mexican.each do |business|
  Tag.create!(business_id: business.id, category_id: c8.id)
end
array_seafood.each do |business|
  Tag.create!(business_id: business.id, category_id: c9.id)
end
array_sandwiches.each do |business|
  Tag.create!(business_id: business.id, category_id: c10.id)
end
array_korean.each do |business|
  Tag.create!(business_id: business.id, category_id: c11.id)
end
array_italian.each do |business|
  Tag.create!(business_id: business.id, category_id: c12.id)
end
array_american.each do |business|
  Tag.create!(business_id: business.id, category_id: c13.id)
end

array_burmese.each do |business|
  Tag.create!(business_id: business.id, category_id: c14.id)
end

array_mediterranean.each do |business|
  Tag.create!(business_id: business.id, category_id: c15.id)
end

array_dessert.each do |business|
  Tag.create!(business_id: business.id, category_id: c16.id)
end
