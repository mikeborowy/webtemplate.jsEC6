import {Car} from '../models/Car';
import {Drone} from '../models/Drone';
import {DataError} from './DataError';

export class FleetDataService {
    constructor() {
        this.cars = [];
        this.drones = [];
        this.errors = [];
    }

    loadData(fleet) {
        // for (let key in fleet) {     console.log(key, fleet[key]); }
        let car,
            drone,
            err = null;

        for (let data of fleet) {
            switch (data.type) {
                case "car":
                    if (this.validateDataCar(data)) {

                        car = this.loadCar(data);
                        if (car) 
                            this.cars.push(car);
                        }
                    else {
                        err = new DataError('Invalid car data', JSON.stringify(data));
                        this
                            .errors
                            .push(err);
                    }
                    break;
                case "drone":

                    if (this.validateDataDrone(data)) {
                        drone = this.loadDrone(data);

                        if (drone) 
                            this.drones.push(drone);
                        }
                    else {
                        err = new DataError('Invalid drone data', JSON.stringify(data));
                        this
                            .errors
                            .push(err);
                    }
                    break;
                default:
                    err = new DataError('Invalid Vehicle type', data);
                    this
                        .errors
                        .push(err);
                    break;
            }
        }
    }

    validateDataCar(car) {
        let requiredProps = "license,model,latLong,miles,make".split(",");
        let hasErrors = false;

        for (let prop of requiredProps) {
            if (!car[prop]) {
                this
                    .errors
                    .push(new DataError(`Invalid field ${prop} in car object`, car));
                hasErrors = true;
            }
        }

        if (Number.isNaN(parseFloat(car.miles))) {
            this
                .errors
                .push(new DataError(`car.miles: ${car.miles} in not a number`, car));
            hasErrors = true;
        }

        return !hasErrors;
    }

    loadCar(car) {

        try {
            let c = new Car(car.license, car.model, car.latLong);
            c.miles = car.miles;
            c.make = car.make;

            return c;
        } catch (err) {
            this
                .errors
                .push(new DataError('Error loading car', car));
        }
        return null;
    }

    getCarByLicense(licenseNum){
        return this.cars.find( car => car.license === licenseNum );
    }

    getCarsSortedByLicense(){
        return this.cars.sort( (car1, car2) => {
            if(car1.license < car2.license)
                return -1;
            if(car1.license > car2.license)
                return 1;
            
            return 0;
        });
    }

    filterCarByMake(filter){
        return this.cars.filter( car => car.make.indexOf(filter) >= 0);
    }

    validateDataDrone(drone) {
        let requiredProps = "license,model,latLong,airTimeHours,base".split(",");
        let hasErrors = false;

        for (let prop of requiredProps) {
            if (!drone[prop]) {
                this
                    .errors
                    .push(new DataError(`Invalid field ${prop} in car object`, drone));
                hasErrors = true;
            }
        }

        if (Number.isNaN(parseFloat(drone.airTimeHours))) {
            this
                .errors
                .push(new DataError(`car.miles: ${drone.miles} in not a number`, drone));
            hasErrors = true;
        }

        return !hasErrors;
    }

    loadDrone(drone) {
        try {
            let d = new Drone(drone.license, drone.model, drone.latLong);
                d.hours = drone.airTimeHours;
                d.base = drone.base;
            
            console.log(d)

            return d;
        } catch (err) {
            this
                .errors
                .push(new DataError('Error loading car', drone));
        }
        return null;
    }
}