// Prototype Design Pattern

// The Prototype Pattern is a creational design pattern that focuses on creating new objects by cloning existing objects, rather than creating them from scratch.This is particularly useful when the object creation process is complex or time - consuming.

// Key Concepts

// Prototype: An existing object that serves as a template for creating new objects.
// Cloning: The process of creating a new object that is a copy of the prototype.


// When to Use the Prototype Pattern

// When the cost of creating an object is high.
// When you need to create many objects with similar configurations.
// When you want to avoid subclassing to create variations of objects.
// The Prototype Pattern is a valuable tool for creating objects efficiently and flexibly.By understanding its principles, you can leverage it to improve the design and performance of your applications.



interface Cloneable<T> {
    clone(): T;
}

class Shape implements Cloneable<Shape> {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    clone(): Shape {
        return new Shape(this.x, this.y);
    }
}

class Circle extends Shape {
    radius: number;

    constructor(x: number, y: number, radius: number) {
        super(x, y);
        this.radius = radius;
    }

    clone(): Circle {
        return new Circle(this.x, this.y, this.radius);
    }
}

// Usage
const circle1 = new Circle(0, 0, 5);
const circle2 = circle1.clone();

console.log(circle1 === circle2); // Output: false (different objects)
console.log(circle1.radius === circle2.radius); // Output: true (same radius)