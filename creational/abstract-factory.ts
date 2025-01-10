// Abstract Factory
interface PhoneFactory {
    createPhone(): Phone;
    createCharger(): Charger;
}

// Concrete Factories
class AppleFactory implements PhoneFactory {
    createPhone(): Phone {
        return new iPhone();
    }

    createCharger(): Charger {
        return new AppleCharger();
    }
}

class SamsungFactory implements PhoneFactory {
    createPhone(): Phone {
        return new SamsungPhone();
    }

    createCharger(): Charger {
        return new SamsungCharger();
    }
}

// Abstract Products
interface Phone {
    model: string;
    brand: string;
    turnOn(): void;
}

interface Charger {
    voltage: number;
    connect(): void;
}

// Concrete Products
class iPhone implements Phone {
    model = "iPhone 15";
    brand = "Apple";

    turnOn(): void {
        console.log("Turning on iPhone 15");
    }
}

class SamsungPhone implements Phone {
    model = "Galaxy S24";
    brand = "Samsung";

    turnOn(): void {
        console.log("Turning on Galaxy S24");
    }
}

class AppleCharger implements Charger {
    voltage = 5;

    connect(): void {
        console.log("Connecting Apple Charger");
    }
}

class SamsungCharger implements Charger {
    voltage = 9;

    connect(): void {
        console.log("Connecting Samsung Charger");
    }
}

// Client Code
function createPhoneSetup(brand: string) {
    let factory: PhoneFactory;

    if (brand === "Apple") {
        factory = new AppleFactory();
    } else if (brand === "Samsung") {
        factory = new SamsungFactory();
    } else {
        throw new Error("Invalid phone brand");
    }

    const phone = factory.createPhone();
    const charger = factory.createCharger();

    phone.turnOn();
    charger.connect();
}

// Usage
createPhoneSetup("Apple");
// Output: Turning on iPhone 15, Connecting Apple Charger
createPhoneSetup("Samsung");
// Output: Turning on Galaxy S24, Connecting Samsung Charger