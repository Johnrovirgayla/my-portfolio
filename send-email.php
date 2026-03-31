<?php

// send-email.php

// Check for POST request
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = filter_var(trim($_POST['name']), FILTER_SANITIZE_STRING);
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $message = filter_var(trim($_POST['message']), FILTER_SANITIZE_STRING);
    $testimonial = filter_var(trim($_POST['testimonial']), FILTER_SANITIZE_STRING);

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Invalid email format");
    }

    // Prepare email
    $to = "your-email@example.com"; // Change to your email address
    $subject = "New Contact Form Submission";
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Message: $message\n";
    $body .= "Testimonial: $testimonial\n";

    // Send email
    if (mail($to, $subject, $body)) {
        echo "Email sent successfully!";
    } else {
        echo "Email delivery failed.";
    }
} else {
    echo "Invalid request method";
}
?>