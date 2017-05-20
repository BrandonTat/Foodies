import React from 'react';
import MarkerManager from '../../util/marker_manager';

const mapOptions = {
  center: { lat: 37.7758, lng: -122.435},
  zoom: 13
};

class BusinessMap extends React.Component{
  componentDidMount() {
    this.map = new google.maps.Map(this.refs.map, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.businesses);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.businesses);
  }

  render() {
    return(
      <div id="map-container" ref="map"></div>
    );
  }
}

export default BusinessMap;
