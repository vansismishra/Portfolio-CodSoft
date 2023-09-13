function submitForm(event) {
    event.preventDefault();

    // Get form input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate and process the data (you can customize this part)
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill in all fields.');
        return;
    }

    // You can send the data to your server or perform any other action here.
    // For demonstration, we'll display an alert with the collected data.
    const contactData = {
        name,
        email,
        message
    };

    alert('Form submitted successfully!\n\nName: ' + contactData.name + '\nEmail: ' + contactData.email + '\nMessage: ' + contactData.message);

    // Clear the form
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}

// Add an event listener to the form
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', submitForm);