import {BasePage} from '../BasePage';
import {Table} from '../ui/Table.js';
import {application} from '../../app.js';

/*{
    license: 'ABC123',
    type: 'drone',
    model: 'Amazon 1250',
    airTimeHours: '6050',
    base: 'New York',
    latLong: '40.775596 -73.974615'
}*/

export class DronesPage extends BasePage {

    constructor() {
        super();
        this.id = "Drones";
    }

    create() {
        super.create();
        let headers = "License;Base;Model;Hours".split(';');

        console.log(application.dataService.drones);

        let table = new Table(headers, application.dataService.drones);
        table.addTo(this.element);
    }

    getHTMLContent() {
        return `<div style="margin:20px"><h3>${this.id}</h3></div>`;
    }
}