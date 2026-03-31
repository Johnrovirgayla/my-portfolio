<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Sanitize and validate input
    $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

    if (filter_var($email, FILTER_VALIDATE_EMAIL) && !empty($name) && !empty($message)) {
        // Process the contact form (store in database, send email, etc.)
        // For demonstration, we'll just return a success message
        echo json_encode(["status" => "success", "message" => "Thank you for your message, $name!"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Invalid input. Please check your details."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request method."]);
}
?>
