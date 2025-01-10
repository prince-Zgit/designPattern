// Adapter Design Pattern
//adapters
var stripGatewayAdapter = /** @class */ (function () {
    function stripGatewayAdapter(stripeGateway) {
        this.stripeGateway = stripeGateway;
    }
    stripGatewayAdapter.prototype.makePayment = function (amount, cardDetails) {
        var stripeCardDetails = {
            cardNumber: cardDetails.cardNumber,
            expiryDate: cardDetails.expiryDate,
            cvv: cardDetails.CVV
        };
        var stripeResponse = this.stripeGateway.makeStripePayment(amount, stripeCardDetails);
        var paymentResponse = {
            status: stripeResponse.status,
            transactionId: stripeResponse.transactionId,
            message: stripeResponse.message
        };
        return paymentResponse;
    };
    return stripGatewayAdapter;
}());
// Adaptees (Specific Payment Gateways)
var StripeGateway = /** @class */ (function () {
    function StripeGateway() {
    }
    StripeGateway.prototype.makeStripePayment = function (amount, cardDetails) {
        // ... Logic to make a payment using the Stripe API ...
        // This is a simplified example, real-world implementation would involve 
        // making an actual API call to the Stripe server.
        return {
            status: "success",
            transactionId: "stripe_1234567890",
            message: "Payment successful via Stripe"
        };
    };
    return StripeGateway;
}());
// Usage
var stripeGateway = new StripeGateway();
var stripeAdapter = new stripGatewayAdapter(stripeGateway);
var paymentResponse = stripeAdapter.makePayment(100, {
    cardNumber: "1234567890123456",
    expiryDate: "12/25",
    CVV: "123"
});
console.log(paymentResponse);
