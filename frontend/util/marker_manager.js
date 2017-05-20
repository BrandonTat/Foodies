import { values } from 'lodash';

export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(businesses) {
    const businessesObj = {};
    let businessesArr = values(businesses)
    businessesArr.forEach(business => businessesObj[business.id] = business);

    businessesArr
      .filter(business => !this.markers[business.id])
      .forEach(newBusiness => this.createMarkerFromBusiness(newBusiness));
  }

  createMarkerFromBusiness(business){
    const position = new google.maps.LatLng(business.lat, business.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      businessId: business.id
    });

    this.markers[marker.businessId] = marker;
  }
}
