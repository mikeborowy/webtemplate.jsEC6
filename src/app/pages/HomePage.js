import {BasePage} from '../BasePage';
import {Image} from '../ui/Image.js';
import {Button} from '../ui/Button.js';
import {application} from '../../app.js';

export class HomePage extends BasePage {
    
    constructor() {
        super();
        this.id = "Home";
    }
    
    create() {
        super.create();
        
        let i = new Image('../images/drone.jpg');
        /** this.element refers to getHTMLContent()*/
        i.addTo(this.element);
       
        let styleString = 'width: 300px; height: 80px; font-size: 26px; margin: 10px;';
        let b = new Button('Self Driving Cars');
        b.style = styleString;
        b.addTo(this.element);
        b.element.click(() => application.activateRoute('Cars'));
         
        b = new Button('Drones');
        b.style = styleString;
        b.addTo(this.element);
        b.element.click(() => application.activateRoute('Drones'));
    }
    
    getHTMLContent() {
        return `<div style="text-align: center;"></div>`;
    }
}