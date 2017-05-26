import React from 'react';
import { Link } from 'react-router-dom';

const p1 = "https://res.cloudinary.com/dkdpoayma/image/upload/c_fill,h_350,w_350/v1495816945/food-salad-healthy-lunch_imiwrr.jpg";
const p9 = "https://res.cloudinary.com/dkdpoayma/image/upload/c_fill,h_350,w_350/v1495407314/lobster_s9v3we.jpg";
//bella Trattoria

// const PHOTOS = [p1, p2, p3, p4, p5, p6, p7, p8, p9];

class HomeIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBusinesses();
  }

  render() {
    return (<div></div>);
  //   return (
  //     <div>
  //       <ul id="popularPhotos">
  //         {PHOTOS.map(photo =>
  //             <img key={photo} id="photos" src={photo}/>
  //         )}
  //       </ul>
  //     </div>
  //   );
  }
}

export default HomeIndex;
