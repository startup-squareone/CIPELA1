// payment.js

document.getElementById('paymentForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // In a real application, you would send this data to a server for payment processing
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;

    // Simulate payment processing
    simulatePayment(cardNumber, expiryDate, cvv);
});

function simulatePayment(cardNumber, expiryDate, cvv) {
    // Simulate a successful payment (replace with your payment gateway integration)
    setTimeout(() => {
        alert('Payment successful! Thank you for your purchase.');
        // Redirect to a confirmation page or perform any additional actions
    }, 2000); // Simulate a 2-second payment processing delay
}
