const Name = document.getElementById('name_field');
const Email_Address = document.getElementById('email_field');
const Message = document.getElementById('message_field');
const form = document.getElementById('Contact_Form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputs();
})

function validateInputs() {
    if (name_field.value === '') {
        alert('Name is required.');
    }
    else if (email_field.value === '') {
        alert('Email Address is required.');
    } else if (message_field.value === '') {
        alert('Message is required.');
    } else {
        alert('Form submitted successfully!');
    }
}