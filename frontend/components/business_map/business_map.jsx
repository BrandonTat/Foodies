import React from 'react';

const mapOptions = {
  center: { lat: 37.7758, lng: -122.435},
  zoom: 13
};

class BusinessMap extends React.Component{
  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);

  }

  render() {
    return(
      <div id="map-container" ref="map"></div>
    );
  }
}

export default BusinessMap;
