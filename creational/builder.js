// Step 1: Define the Car class (product)
var Car = /** @class */ (function () {
    function Car() {
        this.engine = '';
        this.wheels = 0;
        this.color = '';
    }
    Car.prototype.showDetails = function () {
        console.log("Car Details: Engine: ".concat(this.engine, ", Wheels: ").concat(this.wheels, ", Color: ").concat(this.color));
    };
    return Car;
}());
// Step 3: Implement the Concrete Builder
var SportsCarBuilder = /** @class */ (function () {
    function SportsCarBuilder() {
        this.car = new Car();
    }
    SportsCarBuilder.prototype.setEngine = function (engine) {
        this.car.engine = engine;
        return this; // Return the builder for chaining
    };
    SportsCarBuilder.prototype.setWheels = function (wheels) {
        this.car.wheels = wheels;
        return this;
    };
    SportsCarBuilder.prototype.setColor = function (color) {
        this.car.color = color;
        return this;
    };
    SportsCarBuilder.prototype.build = function () {
        return this.car;
    };
    return SportsCarBuilder;
}());
// Step 4: Create the Director class (optional)
var CarDirector = /** @class */ (function () {
    function CarDirector(builder) {
        this.builder = builder;
    }
    CarDirector.prototype.buildSportsCar = function () {
        return this.builder
            .setEngine('V8')
            .setWheels(4)
            .setColor('Red')
            .build();
    };
    CarDirector.prototype.buildEcoCar = function () {
        return this.builder
            .setEngine('Electric')
            .setWheels(4)
            .setColor('Green')
            .build();
    };
    return CarDirector;
}());
// Step 5: Use the Builder to create objects
var builder = new SportsCarBuilder();
var director = new CarDirector(builder);
var sportsCar = director.buildSportsCar();
sportsCar.showDetails();
var ecoCar = director.buildEcoCar();
ecoCar.showDetails();
