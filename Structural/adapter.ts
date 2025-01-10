// Adapter Design Pattern

// The Adapter Pattern is a structural design pattern that allows objects with incompatible interfaces 1  to work together.It acts as a bridge between two incompatible interfaces, making them compatible. 2    



// Key Concepts

//     Target Interface: Defines the interface that the client expects.
//     Adaptee: The existing class with an incompatible interface.
//     Adapter: The class that acts as a bridge between the Target and the Adaptee.It implements the Target interface and delegates requests to the Adaptee.



interface cardDetails {
    cardNumber: string;
    expiryDate:string;
    CVV:string;
}

interface paymentResponse{
    status:string;
    transactionId: string;
    message:string;
}

interface paymentGatewayInterface{
    makePayment(amount:number, cardDetails:cardDetails):paymentResponse;
}


// Define stripe interfaces
interface stripeCardDetails {
    cardNumber: string;
    expiryDate: string;
    cvv: string;
}

interface stripePaymentResponse {
    status: string;
    transactionId: string;
    message: string;
}

//adapters
class stripGatewayAdapter implements paymentGatewayInterface{
    private stripeGateway: StripeGateway;

    constructor(stripeGateway:StripeGateway){
        this.stripeGateway = stripeGateway;
    }

    makePayment(amount: number, cardDetails: cardDetails): paymentResponse {
        const stripeCardDetails: stripeCardDetails = {
            cardNumber: cardDetails.cardNumber,
            expiryDate: cardDetails.expiryDate,
            cvv: cardDetails.CVV
        };

        const stripeResponse = this.stripeGateway.makeStripePayment(amount, stripeCardDetails);

        const paymentResponse: paymentResponse = {
            status: stripeResponse.status,
            transactionId: stripeResponse.transactionId,
            message: stripeResponse.message
        };

        return paymentResponse;    
    }
}


// Adaptees (Specific Payment Gateways)
class StripeGateway {
    makeStripePayment(amount: number, cardDetails: stripeCardDetails): stripePaymentResponse {
        // ... Logic to make a payment using the Stripe API ...
        // This is a simplified example, real-world implementation would involve 
        // making an actual API call to the Stripe server.
        return {
            status: "success",
            transactionId: "stripe_1234567890",
            message: "Payment successful via Stripe"
        };
    }
}



// Usage
const stripeGateway = new StripeGateway();
const stripeAdapter = new stripGatewayAdapter(stripeGateway);

const paymentResponse = stripeAdapter.makePayment(100, {
    cardNumber: "1234567890123456",
    expiryDate: "12/25",
    CVV: "123"
});

console.log(paymentResponse); 