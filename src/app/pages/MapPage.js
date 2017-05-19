import {BasePage} from '../BasePage';
import {GoogleMap} from '../ui/GoogleMap';
import {application} from '../../app.js';
import GoogleMaps from 'google-maps';


export class MapPage extends BasePage {

    constructor() {
        super();
        this.id = "Map";
    }

    create() {
        super.create();
        
        let centerOfMap = {lat: "40.783667", lng:"-73.965883"};
        let map = new GoogleMap(centerOfMap, application.dataService.cars);
        map.addTo(this.element);
    }

    getHTMLContent() {
        return `<div style="margin:20px"><h3>${this.id}</h3></div>`;
    }
}