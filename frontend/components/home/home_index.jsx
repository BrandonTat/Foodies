import React from 'react';

const p1 = "https://static.pexels.com/photos/5938/food-salad-healthy-lunch.jpg";
const p2 = "http://res.cloudinary.com/dkdpoayma/image/upload/v1495407315/brunch_v0cewv.jpg";
const p3 = "http://res.cloudinary.com/dkdpoayma/image/upload/v1495407314/clams_xp3lyc.jpg";
const p4 = "http://res.cloudinary.com/dkdpoayma/image/upload/v1495407314/food-ice-cream_wvsst4.jpg";
const p5 = "http://res.cloudinary.com/dkdpoayma/image/upload/v1495407314/grilled_chicken_hh1v42.jpg";
const p6 = "http://res.cloudinary.com/dkdpoayma/image/upload/v1495407314/burgers_myej8b.jpg";
const p7 = "http://res.cloudinary.com/dkdpoayma/image/upload/v1495407314/crackers_i8cweo.jpg";
const p8 = "http://res.cloudinary.com/dkdpoayma/image/upload/v1495407314/acai_x5wveh.jpg";
const p9 = "http://res.cloudinary.com/dkdpoayma/image/upload/v1495407314/lobster_s9v3we.jpg";

const PHOTOS = [p1, p2, p3, p4, p5, p6, p7, p8, p9];

class HomeIndex extends React.Component {

  render() {
    return (
      <div>
        <ul id="popularPhotos">
          {PHOTOS.map(photo =>
              <img key={photo} id="photos" src={photo}/>
          )}
        </ul>
      </div>
    );
  }
}

export default HomeIndex;
