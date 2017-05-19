import {BasePage} from '../BasePage';
import {Table} from '../ui/Table.js';
import {application} from '../../app.js';

/*{
    license: 'AT9900',
    type: 'car',
    make: 'Tesla',
    model: 'Quick Transport',
    miles: '15600',
    latLong: '40.773272 -73.968875'
}*/

export class CarsPage extends BasePage {

    constructor() {
        super();
        this.id = "Cars";
    }

    create() {
        super.create();
        let headers = "License;Make;Model;Miles".split(';');
        let table = new Table(headers, application.dataService.cars);
        table.addTo(this.element);
    }

    getHTMLContent() {
        return `<div style="margin:20px"><h3>${this.id}</h3></div>`;
    }
}