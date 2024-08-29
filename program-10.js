// Write a JavaScript program that creates a class called Product with properties for product ID, name, and price. Include a method to calculate the total price by multiplying the price by the quantity. Create a subclass called PersonalCareProduct that inherits from the Product class and adds an additional property for the warranty period. Override the total price calculation method to include the warranty period. Create an instance of the PersonalCareProduct class and calculate its total price.

'use strict';

class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  calcTotalPrice(quantity) {
    console.log(
      `Total price of ${quantity} ${this.name} is ₹${(
        this.price * quantity
      ).toFixed(2)}`
    );
  }
}

class PersonalCareProduct extends Product {
  constructor(id, name, price, warranty) {
    super(id, name, price);
    this.warranty = warranty;
  }

  calcTotalPrice(quantity) {
    console.log(
      `Total price of ${quantity} ${this.name} with ${
        this.warranty
      } months of warranty period is ₹${(this.price * quantity).toFixed(2)}`
    );
  }
}

const trimmer = new PersonalCareProduct(1001, 'Philips Trimmer', 1400, 6);
trimmer.calcTotalPrice(5);
