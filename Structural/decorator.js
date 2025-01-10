// Decorator
// Also known as: Wrapper
// Decorator is a structural design pattern that lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// PlainText is the base text object.
var plainText = /** @class */ (function () {
    function plainText(content) {
        this.content = content;
        console.log('plainText class called');
    }
    plainText.prototype.getContent = function () {
        return this.content;
    };
    return plainText;
}());
// TextDecorator is the abstract decorator class that holds a reference to the Text object.
var textDecorator = /** @class */ (function () {
    function textDecorator(text) {
        this.text = text;
        console.log('textDecorator class called');
    }
    textDecorator.prototype.getContent = function () {
        return this.getContent();
    };
    return textDecorator;
}());
//BoldText, ItalicText, and UnderlineText are concrete decorators that add specific formatting to the text.
var BoldText = /** @class */ (function (_super) {
    __extends(BoldText, _super);
    function BoldText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BoldText.prototype.getContent = function () {
        console.log('bold class called');
        return "<b>".concat(this.text.getContent(), "</b>");
    };
    return BoldText;
}(textDecorator));
var ItalicText = /** @class */ (function (_super) {
    __extends(ItalicText, _super);
    function ItalicText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ItalicText.prototype.getContent = function () {
        return "<i>".concat(this.text.getContent(), "</i>");
    };
    return ItalicText;
}(textDecorator));
var UnderlineText = /** @class */ (function (_super) {
    __extends(UnderlineText, _super);
    function UnderlineText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UnderlineText.prototype.getContent = function () {
        return "<u>".concat(this.text.getContent(), "</u>");
    };
    return UnderlineText;
}(textDecorator));
//usage
var plain = new plainText('Hello World');
console.log(plain.getContent());
var bold = new BoldText(plain);
console.log(bold.getContent());
