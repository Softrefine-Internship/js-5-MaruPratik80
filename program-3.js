// Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. Override the display method to include the number of doors.

'use strict';

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  details() {
    console.log(`${this.make} ${this.model} made in ${this.year}`);
  }
}

class Car extends Vehicle {
  constructor(make, model, year, doors) {
    super(make, model, year);
    this.doors = doors;
  }

  details() {
    console.log(
      `${this.make} ${this.model} made in ${this.year} has ${this.doors} doors`
    );
  }
}

const bike = new Vehicle('Hero Honda', 'CD Delux', 2011);
bike.details();

const camaro = new Car('Chevrolet', 'Camaro', 2017, 2);
camaro.details();
