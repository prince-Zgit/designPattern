// Bridge
//bridge
var TextMessage = /** @class */ (function () {
    function TextMessage(messageSender) {
        this.messageSender = messageSender;
    }
    TextMessage.prototype.sendMessage = function (content, recipient) {
        this.messageSender.sendMessage(content, recipient, "SMS");
    };
    return TextMessage;
}());
//bridge
var EmailMessage = /** @class */ (function () {
    function EmailMessage(messageSender) {
        this.messageSender = messageSender;
    }
    EmailMessage.prototype.sendMessage = function (content, recipient) {
        this.messageSender.sendMessage(content, recipient, "Email");
    };
    return EmailMessage;
}());
var SMSSender = /** @class */ (function () {
    function SMSSender() {
    }
    SMSSender.prototype.sendMessage = function (content, recipient, messageType) {
        if (messageType !== "SMS") {
            throw new Error("Invalid message type for SMS sender");
        }
        console.log("Sending SMS to ".concat(recipient, ": ").concat(content));
        // ... Logic to send SMS using a specific SMS gateway ...
    };
    return SMSSender;
}());
var EmailSender = /** @class */ (function () {
    function EmailSender() {
    }
    EmailSender.prototype.sendMessage = function (content, recipient, messageType) {
        if (messageType !== "Email") {
            throw new Error("Invalid message type for Email sender");
        }
        console.log("Sending Email to ".concat(recipient, ": ").concat(content));
        // ... Logic to send Email using an Email service ...
    };
    return EmailSender;
}());
// Usage
var smsSender = new SMSSender();
var textMessage = new TextMessage(smsSender);
textMessage.sendMessage("Hello!", "+1234567890");
var emailSender = new EmailSender();
var emailMessage = new EmailMessage(emailSender);
emailMessage.sendMessage("Welcome!", "user@example.com");
