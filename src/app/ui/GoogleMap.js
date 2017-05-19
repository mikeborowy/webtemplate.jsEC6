import {BaseElement} from '../BaseElement';
import GoogleMaps from 'google-maps';

export class GoogleMap extends BaseElement {

    constructor(centerOfMap, data) {
        super();

        this.centerOfMap = centerOfMap;
        this.data = data;
    }

    createElement() {

        super.createElement();

        setTimeout(() => {

            /**
             * destruct from this Class, grab this.centerOfMap and assign to
             * let {centerOfMap} so it can be accesed in
             * GoogleMaps.load(function(google) {))
             */

            // let {centerOfMap} = this;
            let thatClass = this;

            GoogleMaps.KEY = 'AIzaSyDzOHrhXWAVvv7leDD7Rdc2n6M6lhFb8WE';
            GoogleMaps.load(function (google) {

                let options = {
                    zoom: 13,
                    center: thatClass.centerOfMap
                };

                let map = new google.maps.Map(document.getElementById('map'), options);

                for (let vehicle of thatClass.data) {

                    let [lat, long] = vehicle.latLong.split(' ');

                    console.log('lat:' + lat);

                    let myLatLng = new google.maps.LatLng(lat, long);
                    let marker = new google.maps.Marker({position: myLatLng, map: map});

                    marker.setMap(map);
                }
            });

        }, 0);

    }

    getHTMLContent() {
        return `<div style="width:800px; height: 400px;" id="map"></div>`;
    }

    /**
     * GETERS/SETTERs
     */

}