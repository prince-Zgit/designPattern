// Bridge

// Bridge is a structural design pattern that lets you split a large class or a set of closely related classes into two separate hierarchies—abstraction and implementation—which can be developed independently of each other.

// Abstraction ? Implementation ? Sound scary ? Stay calm and let’s consider a simple example.

// Abstraction(also called interface) is a high - level control layer for some entity.This layer isn’t supposed to do any real work on its own.It should delegate the work to the implementation layer(also called platform).


interface Message {
    sendMessage(content: string, recipient: string): void;
}

interface MessageSender {
    sendMessage(content: string, recipient: string, messageType: string): void;
}

//bridge
class TextMessage implements Message {
    private messageSender: MessageSender;

    constructor(messageSender: MessageSender) {
        this.messageSender = messageSender;
    }

    sendMessage(content: string, recipient: string): void {
        this.messageSender.sendMessage(content, recipient, "SMS");
    }
}


//bridge
class EmailMessage implements Message {
    private messageSender: MessageSender;

    constructor(messageSender: MessageSender) {
        this.messageSender = messageSender;
    }

    sendMessage(content: string, recipient: string): void {
        this.messageSender.sendMessage(content, recipient, "Email");
    }
}





class SMSSender implements MessageSender {
    sendMessage(content: string, recipient: string, messageType: string): void {
        if (messageType !== "SMS") {
            throw new Error("Invalid message type for SMS sender");
        }
        console.log(`Sending SMS to ${recipient}: ${content}`);
        // ... Logic to send SMS using a specific SMS gateway ...
    }
}



class EmailSender implements MessageSender {
    sendMessage(content: string, recipient: string, messageType: string): void {
        if (messageType !== "Email") {
            throw new Error("Invalid message type for Email sender");
        }
        console.log(`Sending Email to ${recipient}: ${content}`);
        // ... Logic to send Email using an Email service ...
    }
}

// Usage
const smsSender = new SMSSender();
const textMessage = new TextMessage(smsSender);
textMessage.sendMessage("Hello!", "+1234567890");

const emailSender = new EmailSender();
const emailMessage = new EmailMessage(emailSender);
emailMessage.sendMessage("Welcome!", "user@example.com");