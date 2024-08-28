//  Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.

'use strict';

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  calcArea() {
    return this.width * this.height;
  }

  calcPerimeter() {
    return 2 * (this.width + this.height);
  }
}

const rectangle = new Rectangle(20, 10);
console.log(rectangle.calcArea());
console.log(rectangle.calcPerimeter());
