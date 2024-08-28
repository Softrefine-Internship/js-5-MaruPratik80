// Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.

'use strict';

class Shape {
  calcArea(width, height) {
    const area = width * height;
    console.log(`Area of Shape is ${area} squre unit`);
    return area;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  calcArea() {
    const area = Math.PI * this.radius * this.radius;
    console.log(`Area of Circle is ${area.toFixed(2)} squre unit`);
    return area;
  }
}

class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }
  calcArea() {
    const area = 0.5 * this.base * this.height;
    console.log(`Area of Triangle is ${area} squre unit`);
    return area;
  }
}

const circle = new Circle(5);
circle.calcArea();

const triangle = new Triangle(5, 4);
triangle.calcArea();
