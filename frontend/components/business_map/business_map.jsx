import React from 'react';
import MarkerManager from '../../util/marker_manager';
import { values } from 'lodash';

const mapOptions = {
  center: { lat: 37.7758, lng: -122.435},
  zoom: 13
};

class BusinessMap extends React.Component{
  componentDidMount() {
    this.map = new google.maps.Map(this.refs.map, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.businesses);

    this.showBusiness = this.showBusiness.bind(this);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.businesses);

    const markers = values(this.MarkerManager.markers);

    markers.forEach(marker => {
      this.showBusiness(marker);
    });
  }

  showBusiness(marker) {
    let businessId = marker.businessId;
    let businessName = this.props.businesses[businessId].name;

    const window = new google.maps.InfoWindow({
      content: businessName,
      maxWidth: 200
    });

    marker.addListener('mouseover', () => {
      window.open(this.map, marker);
    });

    marker.addListener('mouseout', () => {
      window.close(this.map, marker);
    });
  }

  render() {
    return(
      <div id="map-container" ref="map"></div>
    );
  }
}

export default BusinessMap;
