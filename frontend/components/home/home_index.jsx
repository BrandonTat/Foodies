import React from 'react';

const p1 = "https://static.pexels.com/photos/5938/food-salad-healthy-lunch.jpg";
const p2 = "https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb";
const p3 = "https://images.pexels.com/photos/29302/pexels-photo.jpg?h=350&auto=compress&cs=tinysrgb";
const p4 = "https://images.pexels.com/photos/245513/pexels-photo-245513.jpeg?h=350&auto=compress&cs=tinysrgb";
const p5 = "https://images.pexels.com/photos/24565/pexels-photo-24565.jpg?h=350&auto=compress&cs=tinysrgb";
const p6 = "https://images.pexels.com/photos/8374/food-ice-cream.jpg?h=350&auto=compress&cs=tinysrgb";
const p7 = "https://images.pexels.com/photos/41967/appetizer-canape-canapes-cheese-41967.jpeg?h=350&auto=compress&cs=tinysrgb";
const p8 = "https://images.pexels.com/photos/47483/pexels-photo-47483.jpeg?h=350&auto=compress&cs=tinysrgb";
const p9 = "https://images.pexels.com/photos/4863/restaurant-lighting-lobster-neon.jpg?h=350&auto=compress&cs=tinysrgb";

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
