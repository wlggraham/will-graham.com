
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    formProps.source = 'testwebsite.com'

    fetch('https://er08osw0iaf.execute-api.us-west-2.amazonaws.com/prod/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'ERx7xXP0AA3DqAwrQIS842XUWD9N7Uxt87SCLYNl'
        },
        body: JSON.stringify(formProps),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        const formMessages = document.querySelector('.form-message')
        formMessages.classList.remove('alert-danger');
        formMessages.classList.add('alert-success');
        formMessages.textContent = 'Your message has been sent successfully! A representative from Trutex will reach out shortly.';
        formMessages.style.display = 'block';
    
        // Clear the form
        document.querySelectorAll('#contact-form input, #contact-form textarea').forEach(input => {
            input.value = '';
        });
    })
    .catch((error) => {
        console.error('Error:', error);
        // Assuming formMessages is a reference to your message display element
        const formMessages = document.querySelector('.form-message')
    
        // Remove 'success' class and add 'error' class
        formMessages.classList.remove('alert-success');
        formMessages.classList.add('alert-danger');
        formMessages.textContent = 'Oops! An error occurred and your message could not be sent. While we fix this issue, please reach out to Trutex directly over phone.';
        formMessages.style.display = 'block';
        }
    )
});
