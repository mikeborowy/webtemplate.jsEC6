import {Vehicle} from './Vehicle';

export class Car extends Vehicle {

    constructor(license, model, latLong) {
        super(license, model, latLong); //to parent class

        this.miles = null;
        this.make = null;
    }
}


