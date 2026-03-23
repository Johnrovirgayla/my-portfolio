# My Portfolio

## Overview
This is my personal portfolio project where I showcase my skills, projects, and experiences.

## Table of Contents
- [Setup Instructions](#setup-instructions)
- [Database Setup](#database-setup)
- [PHP Configuration](#php-configuration)
- [Using Different Servers](#using-different-servers)
- [Project Structure](#project-structure)
- [Troubleshooting Guide](#troubleshooting-guide)
- [Deployment Instructions](#deployment-instructions)

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/Johnrovirgayla/my-portfolio.git
   cd my-portfolio
   ```  
2. Install the necessary dependencies if any (e.g., Composer packages).

## Database Setup
1. Create a database in your preferred database management system (MySQL recommended).
2. Import the SQL file located in the `database` directory to set up the tables.

## PHP Configuration
- Make sure you have the necessary PHP extensions enabled:
  - `pdo_mysql`
  - `mbstring`

## Using Different Servers
### PHP Built-in Server
1. Navigate to the directory of your project.
2. Start the built-in server:
   ```bash
   php -S localhost:8000
   ```

### XAMPP
1. Place the project folder in the `htdocs` directory of your XAMPP installation.
2. Open XAMPP Control Panel and start the Apache service.
3. Access your project via `http://localhost/my-portfolio`.

### WAMP
1. Place the project folder in the `www` directory of your WAMP installation.
2. Start the WAMP server and ensure the icon is green.
3. Visit `http://localhost/my-portfolio` in your browser.

### LAMP
1. Place the project folder in the `/var/www/html` directory.
2. Ensure the `apache2` service is running:
   ```bash
   sudo service apache2 start
   ```
3. Access your project at `http://localhost/my-portfolio`.

## Project Structure
```
my-portfolio/
├── database/
│   └── setup.sql
├── public/
│   └── index.php
├── src/
│   └── (your source files)
└── README.md
```

## Troubleshooting Guide
- **Issue:** Cannot connect to the database  
  **Solution:** Ensure your database is running and credentials are correct in your configuration file.

- **Issue:** Server errors  
  **Solution:** Check the server logs for more details.

## Deployment Instructions
1. Ensure all configurations are set for production.
2. Push your code to a remote repository.
3. Set up a web server to host your application (e.g., using DigitalOcean, AWS).
4. Point your domain to the server's IP.
5. Ensure your database is set up in production.
6. Test your application to confirm it's live.

---
Enjoy exploring my portfolio! For any inquiries, feel free to reach out.