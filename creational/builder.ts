// Usage examples: The Builder pattern is a well - known pattern in TypeScript world.It’s especially useful when you need to create an object with lots of possible configuration options. like 10, 15,100 etc where impossible to pass allthing to cosntructor




// Step 1: Define the Car class (product)
class Car {
    public engine: string = '';
    public wheels: number = 0;
    public color: string = '';

    public showDetails(): void {
        console.log(`Car Details: Engine: ${this.engine}, Wheels: ${this.wheels}, Color: ${this.color}`);
    }
}

// Step 2: Create the CarBuilder interface (builder)
interface CarBuilder {
    setEngine(engine: string): CarBuilder;
    setWheels(wheels: number): CarBuilder;
    setColor(color: string): CarBuilder;
    build(): Car;
}

// Step 3: Implement the Concrete Builder
class SportsCarBuilder implements CarBuilder {
    private car: Car;

    constructor() {
        this.car = new Car();
    }

    setEngine(engine: string): CarBuilder {
        this.car.engine = engine;
        return this; // Return the builder for chaining
    }

    setWheels(wheels: number): CarBuilder {
        this.car.wheels = wheels;
        return this;
    }

    setColor(color: string): CarBuilder {
        this.car.color = color;
        return this;
    }

    build(): Car {
        return this.car;
    }
}

// Step 4: Create the Director class (optional)
class CarDirector {
    private builder: CarBuilder;

    constructor(builder: CarBuilder) {
        this.builder = builder;
    }

    buildSportsCar(): Car {
        return this.builder
            .setEngine('V8')
            .setWheels(4)
            .setColor('Red')
            .build();
    }

    buildEcoCar(): Car {
        return this.builder
            .setEngine('Electric')
            .setWheels(4)
            .setColor('Green')
            .build();
    }
}

// Step 5: Use the Builder to create objects
const builder = new SportsCarBuilder();
const director = new CarDirector(builder);

const sportsCar = director.buildSportsCar();
sportsCar.showDetails();

const ecoCar = director.buildEcoCar();
ecoCar.showDetails();
