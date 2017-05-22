import React from 'react';
import MarkerManager from '../../util/marker_manager';
import { values } from 'lodash';

const mapOptions = {
  center: { lat: 37.7758, lng: -122.458},
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
    let business = this.props.businesses[businessId];

    let content = "<div id='mapWindow'>" +
      `<h1>${business.name}</h1>` +
      `<h2>${business.address}, ${business.city}, ${business.state}, ${business.zip}</h2>` +
      "</div>";

    const window = new google.maps.InfoWindow({
      content: content,
      maxWidth: 200
    });

    marker.addListener('mouseover', () => {
      window.open(this.map, marker);
    });

    marker.addListener('mouseout', () => {
      window.close(this.map, marker);
    });

    let mapDiv = document.getElementById(businessId);

    google.maps.event.addDomListener(mapDiv, 'mouseover', () => {
      window.open(this.map, marker);
    });

    google.maps.event.addDomListener(mapDiv, 'mouseout', () => {
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
