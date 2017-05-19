import {Vehicle} from './Vehicle';

export class Drone extends Vehicle {
    
    constructor(license, model, latLong) {
        super(license, model, latLong); //to parent class

        this.hours = null;
        this.base = null;
    }
}