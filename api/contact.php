<?php
// Handle contact form submissions

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // TODO: Add code to send email or save form data

    echo "Thank you for your message, " . $name . "!";
} else {
    // Redirect to contact form if accessed directly
    header('Location: /contact-form.html');
    exit;
}
?>