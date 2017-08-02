import React from 'react';
import MarkerManager from '../../util/marker_manager';
import { values } from 'lodash';

class BusinessMap extends React.Component{
  componentDidMount() {
    this.renderMarkers();

    this.showBusiness = this.showBusiness.bind(this);
    this.renderMarkers = this.renderMarkers.bind(this);
  }

  componentDidUpdate() {
    this.renderMarkers();
    this.MarkerManager.updateMarkers(this.props.businesses);

    const businessIds = Object.keys(this.props.businesses);
    const markers = values(this.MarkerManager.markers);

    markers.forEach(marker => {
      this.showBusiness(marker);
    });
  }

  renderMarkers() {
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.457},
      zoom: 13
    };
    
    this.map = new google.maps.Map(this.refs.map, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.businesses);
  }

  showBusiness(marker) {
    let businessId = marker.businessId;
    let businessItem = this.props.businesses[businessId];

    let content = "<div id='mapWindow'>" +
      `<h1>${businessItem.name}</h1>` +
      `<h2>${businessItem.address}, ${businessItem.city}, ${businessItem.state}, ${businessItem.zip}</h2>` +
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
