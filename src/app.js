import $ from 'jquery';
import {FleetDataService} from './services/FleetDataService';
import {fleet} from './data/fleet';
import {BaseApp} from  './app/BaseApp';
import {HomePage} from  './app/pages/HomePage';
import {CarsPage} from  './app/pages/CarsPage';
import {DronesPage} from  './app/pages/DronesPage';
import {MapPage} from  './app/pages/MapPage';

export class App extends BaseApp{

    constructor() {
        super("Fleet Manager");    

        this.dataService = new FleetDataService();
        this.dataService.loadData(fleet);

        this.addRoute("Home", new HomePage(), true);            
        this.addRoute("Cars", new CarsPage());            
        this.addRoute("Drones",  new DronesPage());            
        this.addRoute("Map", new MapPage());            
    }
}

export let application = new App();
application.initIn($('body'));