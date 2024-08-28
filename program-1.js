// Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details.\

'use strict';

class Person {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }

  displayDetails() {
    console.log(this);
    console.log(
      `${this.name} is ${this.age} years old living in ${this.country}`
    );
  }
}

const pratik = new Person('Pratik', 20, 'India');
pratik.displayDetails();

const jonas = new Person('Jonas', 33, 'Portugal');
jonas.displayDetails();
