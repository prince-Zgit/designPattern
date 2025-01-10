// Singleton Pattern

// The Singleton Pattern is a creational design pattern that ensures a class has only one instance and provides a global point of access 1  to it.


// Key Concepts

// Single Instance: Only one object of the class can exist throughout the application's lifetime.
// Global Access: You can easily access this single instance from anywhere in your code.


class Logger {
    private static instance: Logger;
    private message: string = "";

    private constructor() { } // Private constructor prevents direct instantiation

    static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    log(message: string): void {
        this.message += message + "\n";
        console.log(message);
    }

    getMessage(): string {
        return this.message;
    }
}

// Usage
const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

logger1.log("First message");
logger2.log("Second message");

console.log(logger1 === logger2); // Output: true (both variables refer to the same instance)