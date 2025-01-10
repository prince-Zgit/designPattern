// In summary, the Factory Method pattern provides flexibility in creating objects and allows for easy addition of new implementations without modifying existing code.It is useful when there are several classes that implement a common interface, and it is not known at compile time which implementation will be used
var ApplePhone = /** @class */ (function () {
    function ApplePhone(model, features) {
        this.brand = "Apple";
        this.model = model;
        this.features = features;
    }
    ApplePhone.prototype.assemble = function () {
        console.log("Assembling ".concat(this.brand, " ").concat(this.model));
        // ... actual assembly logic
    };
    return ApplePhone;
}());
var SamsungPhone = /** @class */ (function () {
    function SamsungPhone(model, features) {
        this.brand = "Samsung";
        this.model = model;
        this.features = features;
    }
    SamsungPhone.prototype.assemble = function () {
        console.log("Assembling ".concat(this.brand, " ").concat(this.model));
        // ... actual assembly logic
    };
    return SamsungPhone;
}());
// ... similar classes for VivoPhone and NothingPhone
var PhoneFactory = /** @class */ (function () {
    function PhoneFactory() {
    }
    PhoneFactory.prototype.createPhone = function (brand, model, features) {
        switch (brand) {
            case "Apple":
                return new ApplePhone(model, features);
            case "Samsung":
                return new SamsungPhone(model, features);
            // ... cases for VivoPhone and NothingPhone
            default:
                throw new Error("Invalid phone brand");
        }
    };
    return PhoneFactory;
}());
// Usage
var phoneFactory = new PhoneFactory();
var iPhone = phoneFactory.createPhone("Apple", "iPhone 15", ["5G", "OLED display"]);
iPhone.assemble(); // Output: Assembling Apple iPhone 15
//usage samsung
var sphone = phoneFactory.createPhone("Samsung", "galaxy 5", ['video stream, fold LCD']);
sphone.assemble();
// Let's take example of online shop where we use to sales artificial jewellery now want to add toys also there.
// interface OnlineShop {
//   category: string;
//   products: string[];
//   showProduct(): void;
// }
// class Jewellery implements OnlineShop {
//   category: string;
//   products: string[];
//   constructor(category: string, products: string[]) {
//     this.category = category;
//     this.products = products;
//   }
//   showProduct():void {
//     console.log(`The Category is ${this.category} and products are ${this.products}`);
//   }
// }
// class toys implements OnlineShop{
//   category: string;
//   products: string[];
//   constructor(category:string, products:string[]){
//     this.category = category;
//     this.products = products
//   }
//   showProduct(): void {
//     console.log(`The Category is ${this.category} and products are ${this.products}`);
//   }
// }
// class OnlineShopFactory {
//   createCategory(category: string, products: string[]): OnlineShop {
//     switch (category) {
//       case 'artificial':
//         return new Jewellery(category, products); // Corrected category usage
//       case 'toys':
//         return new toys(category, products)
//       default:
//         throw new Error("Invalid category");
//     }
//   }
// }
// // Usage example
// const factory = new OnlineShopFactory();
// const jewelryShop = factory.createCategory('artificial', ['rings', 'necklaces', 'earrings']);
// jewelryShop.showProduct();
// const toyShop = factory.createCategory('toys', ['plastic', 'learning', 'chess']);
// toyShop.showProduct();
