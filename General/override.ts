class Animal {
    makeSound(): void {
      console.log("Animal makes a sound");
    }
  }
  
  class Dog extends Animal {
    // Overriding the makeSound method
    makeSound(): void {
      console.log("Dog barks");
    }
  }
  
  const animal = new Animal();
  animal.makeSound(); // Animal makes a sound
  
  const dog = new Dog();
  dog.makeSound(); // Dog barks
  