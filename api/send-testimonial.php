<?php
// Handle testimonial submission

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'] ?? '';
    $testimonial = $_POST['testimonial'] ?? '';

    // Perform validation on the inputs
    if (!empty($name) && !empty($testimonial)) {
        // Logic to store testimonial in the database or send it via email
        // For example:
        // $db->query("INSERT INTO testimonials (name, testimonial) VALUES (?, ?)", [$name, $testimonial]);

        echo json_encode(['status' => 'success', 'message' => 'Testimonial submitted successfully.']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Name and testimonial are required.']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method.']);
}
?>