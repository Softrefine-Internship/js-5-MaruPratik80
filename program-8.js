// Write a JavaScript program that creates a class called 'Animal' with properties for species and sound. Include a method to make the animal's sound. Create a subclass called 'Dog' that inherits from the 'Animal' class and adds an additional property for color. Override the make sound method to include the dog's color. Create an instance of the 'Dog' class and make it make its sound.

'use strict';

class Animmal {
  constructor(species, sound) {
    this.species = species;
    this.sound = sound;
  }

  makeSound() {
    console.log(this.sound);
  }
}
class Dog extends Animmal {
  constructor(species, sound, color) {
    super(species, sound);
    this.color = color;
  }

  makeSound() {
    console.log(`${this.color} dog sounds ${this.sound}`);
  }
}

const puppy = new Dog('Bulldog', 'Bhouw.. Bhouw..', 'Fawn');
puppy.makeSound();
