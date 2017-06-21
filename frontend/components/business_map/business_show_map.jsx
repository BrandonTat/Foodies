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
      zoom: 14
    };

    this.map = new google.maps.Map(this.refs.mapShow, mapOptions);
    let marker = new google.maps.Marker({
      position: location,
      map: this.map,
      animation: google.maps.Animation.DROP
    });
  }

  render() {
    return(
      <div id="mapShow-business" ref="mapShow"></div>
    );
  }
}

export default BusinessShowMap;
