document.getElementById('downloadBtn').addEventListener('click', function () {
    // Show a message for future payments
    document.getElementById('payment-message').style.display = 'block';

    // Temporarily allow free download
    window.open('Booksummary.pdf', '_blank');
});
