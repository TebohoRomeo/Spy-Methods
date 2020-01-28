// Author : Teboho Romeo Lekhalo
// Date : 20/01/2020
'use strict';

class Car {
  constructor(speed, brand) {
    this.speed = 360;
    this.brand = 'BMW 3 series GT';
  }

  getBrand() {
    return this.brand;
  }
  setBrand(name) {
    this.brand = name;
  }

  getSpeed() {
    return this.speed;
  }
  setSpeed(speed) {
    this.speed = speed;
  }

  carSpecs() {
    return `Did you know? ${this.getBrand()} Drives ${this.getSpeed()} km/h. Consider buying one.`;
  }
}

let car  = new Car()
console.log(car.carSpecs());

module.exports = Car;
