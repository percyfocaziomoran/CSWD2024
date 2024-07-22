// Function to preview the message
function previewMessage() {
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Set preview values
    document.getElementById('previewName').textContent = `Name: ${name}`;
    document.getElementById('previewEmail').textContent = `Email: ${email}`;
    document.getElementById('previewSubject').textContent = `Subject: ${subject}`;
    document.getElementById('previewMessage').textContent = `Message: ${message}`;

    // Show preview modal
    document.getElementById('previewModal').style.display = 'block';
}

// Function to close preview modal
function closePreview() {
    document.getElementById('previewModal').style.display = 'none';
}

// Function to simulate form submission
function submitForm() {
    // Optionally, you can add code to handle the form data here.
    // For now, just hide the preview modal.
    document.getElementById('previewModal').style.display = 'none';

    // Display a message to the user
    alert('Your message has been submitted.');
}