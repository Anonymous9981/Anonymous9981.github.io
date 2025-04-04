// Form Validation Example
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (name && email && message) {
        alert('Thank you for your message!');
        // Optionally, you can send the form data to a server or API here.
        document.getElementById('contact-form').reset(); // Reset form after submission
    } else {
        alert('Please fill in all fields.');
    }
});

// Optional: Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
