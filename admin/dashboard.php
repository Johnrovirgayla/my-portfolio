<?php

// Dashboard page for admin

// Set the page title
$title = 'Admin Dashboard';

// Include the header
include('header.php');

// Fetch statistics for the dashboard
$usersCount = 100; // Example data
$postsCount = 50; // Example data

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $title; ?></title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Welcome to the Admin Dashboard</h1>
    <div class="stats">
        <div class="stat">
            <h2>Users</h2>
            <p><?php echo $usersCount; ?></p>
        </div>
        <div class="stat">
            <h2>Posts</h2>
            <p><?php echo $postsCount; ?></p>
        </div>
    </div>
    
    <!-- Add any additional dashboard content here -->

</body>
</html>
