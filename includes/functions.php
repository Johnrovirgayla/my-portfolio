<?php

// Helper functions for the portfolio system

/**
 * Function to display portfolio items.
 *
 * @param array $items
 * @return void
 */
function displayPortfolioItems($items) {
    foreach ($items as $item) {
        echo '<div class="portfolio-item">';
        echo '<h3>' . $item['title'] . '</h3>';
        echo '<img src="' . $item['image'] . '" alt="' . $item['title'] . '">';
        echo '<p>' . $item['description'] . '</p>';
        echo '</div>';
    }
}

/**
 * Function to format the date for portfolio items.
 *
 * @param string $date
 * @return string
 */
function formatPortfolioDate($date) {
    return date('F j, Y', strtotime($date));
}

/**
 * Function to sanitize user input.
 *
 * @param string $input
 * @return string
 */
function sanitizeInput($input) {
    return htmlspecialchars(strip_tags(trim($input)));  
}

?>