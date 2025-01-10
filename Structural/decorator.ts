// Decorator
// Also known as: Wrapper
// Decorator is a structural design pattern that lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors.

// Real - World Analogy
// Wearing clothes is an example of using decorators.When you’re cold, you wrap yourself in a sweater.If you’re still cold with a sweater, you can wear a jacket on top.If it’s raining, you can put on a raincoat.All of these garments “extend” your basic behavior but aren’t part of you, and you can easily take off any piece of clothing whenever you don’t need it.


// Decorator Pattern

// The Decorator Pattern is a structural design pattern that allows you to dynamically add responsibilities to an object without altering its class. It achieves this by wrapping the original object(component) with decorator objects that add new functionalities.

// Key Concepts:

// Component: Defines the interface for objects that can be decorated.
// Concrete Component: The actual object that will be decorated.
// Decorator: An abstract class or interface that implements the Component interface and has a reference to the component it decorates.
// Concrete Decorator: Extends the Decorator class and adds specific functionality to the component


// When to Use the Decorator Pattern:

// When you need to add responsibilities to objects dynamically.
// When you want to avoid subclassing to extend functionality.
// When you need to combine multiple functionalities in a flexible way.




// This example demonstrates how you can dynamically apply different formatting styles to a text object by using the Decorator Pattern.You can easily combine multiple decorators to achieve complex formatting effects.

//Text interface defines the core functionality of a text object.
interface text{
    getContent():string;
}


// PlainText is the base text object.
class plainText implements text{
    private content:string;

    constructor(content:string){
        this.content = content;
        console.log('plainText class called')
    }

    getContent(): string {
        return this.content
    }
}


// TextDecorator is the abstract decorator class that holds a reference to the Text object.
abstract class textDecorator implements text{
    protected text:text;

    constructor(text:text){
        this.text = text;
        console.log('textDecorator class called')
    }

    getContent(): string {
        return this.getContent();
    }
}


//BoldText, ItalicText, and UnderlineText are concrete decorators that add specific formatting to the text.
class BoldText extends textDecorator{
    getContent(): string {
        console.log('bold class called')
        return `<b>${this.text.getContent()}</b>`;
    }
}

class ItalicText extends textDecorator {
    getContent(): string {
        return `<i>${this.text.getContent()}</i>`;
    }
}

class UnderlineText extends textDecorator {
    getContent(): string {
        return `<u>${this.text.getContent()}</u>`;
    }
}

//usage
const plain = new plainText('Hello World');
console.log(plain.getContent());

const bold = new BoldText(plain);
console.log(bold.getContent())


