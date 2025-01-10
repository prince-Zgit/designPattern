// Concrete Factories
var AppleFactory = /** @class */ (function () {
    function AppleFactory() {
    }
    AppleFactory.prototype.createPhone = function () {
        return new iPhone();
    };
    AppleFactory.prototype.createCharger = function () {
        return new AppleCharger();
    };
    return AppleFactory;
}());
var SamsungFactory = /** @class */ (function () {
    function SamsungFactory() {
    }
    SamsungFactory.prototype.createPhone = function () {
        return new SamsungPhone();
    };
    SamsungFactory.prototype.createCharger = function () {
        return new SamsungCharger();
    };
    return SamsungFactory;
}());
// Concrete Products
var iPhone = /** @class */ (function () {
    function iPhone() {
        this.model = "iPhone 15";
        this.brand = "Apple";
    }
    iPhone.prototype.turnOn = function () {
        console.log("Turning on iPhone 15");
    };
    return iPhone;
}());
var SamsungPhone = /** @class */ (function () {
    function SamsungPhone() {
        this.model = "Galaxy S24";
        this.brand = "Samsung";
    }
    SamsungPhone.prototype.turnOn = function () {
        console.log("Turning on Galaxy S24");
    };
    return SamsungPhone;
}());
var AppleCharger = /** @class */ (function () {
    function AppleCharger() {
        this.voltage = 5;
    }
    AppleCharger.prototype.connect = function () {
        console.log("Connecting Apple Charger");
    };
    return AppleCharger;
}());
var SamsungCharger = /** @class */ (function () {
    function SamsungCharger() {
        this.voltage = 9;
    }
    SamsungCharger.prototype.connect = function () {
        console.log("Connecting Samsung Charger");
    };
    return SamsungCharger;
}());
// Client Code
function createPhoneSetup(brand) {
    var factory;
    if (brand === "Apple") {
        factory = new AppleFactory();
    }
    else if (brand === "Samsung") {
        factory = new SamsungFactory();
    }
    else {
        throw new Error("Invalid phone brand");
    }
    var phone = factory.createPhone();
    var charger = factory.createCharger();
    phone.turnOn();
    charger.connect();
}
// Usage
createPhoneSetup("Apple");
// Output: Turning on iPhone 15, Connecting Apple Charger
createPhoneSetup("Samsung");
// Output: Turning on Galaxy S24, Connecting Samsung Charger
