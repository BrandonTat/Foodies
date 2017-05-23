import React from 'react';
import MarkerManager from '../../util/marker_manager';
import { values } from 'lodash';

class BusinessShowMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    const {lat, lng} = nextProps.business;
    let location = {lat, lng};
    const mapOptions = {
      center: location,
      zoom: 15
    };

    this.map = new google.maps.Map(this.refs.mapShow, mapOptions);
    let marker = new google.maps.Marker({
      position: location,
      map: this.map,
      animation: google.maps.Animation.DROP
      //BOUNCE
    });

    let business = nextProps.business;

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
  }

  render() {
    return(
      <div id="mapShow-container" ref="mapShow"></div>
    );
  }
}

export default BusinessShowMap;
