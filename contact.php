<?php
require 'config.php';

$success = false;
$error = "";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name    = trim($_POST['name'] ?? '');
    $email   = trim($_POST['email'] ?? '');
    $phone   = trim($_POST['phone'] ?? '');
    $message = trim($_POST['message'] ?? '');

    if ($name && filter_var($email, FILTER_VALIDATE_EMAIL) && $message) {

        // Save to DB
        $stmt = $pdo->prepare("INSERT INTO submissions (type, name, email, phone, message) VALUES ('contact', ?, ?, ?, ?)");
        $stmt->execute([$name, $email, $phone, $message]);

        // Send email
        $to      = "Dirtrolloffs@gmail.com";
        $subject = "New Contact Form Submission";
        $body    = "Name: $name\nEmail: $email\nPhone: $phone\n\nMessage:\n$message";
        $headers = "From: $email";

        @mail($to, $subject, $body, $headers);

        $success = true;
    } else {
        $error = "Please fill out all fields with a valid email.";
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact | DIRT ROLLOFFS</title>
    <link rel="stylesheet" href="styles.css?v=11">
    <script defer src="script.js"></script>
</head>

<body>

<a href="tel:8459331925" class="floating-call">📞 Call DIRT ROLLOFFS</a>

<header class="site-header">
    <div class="header-left">
        <img src="images/logo.PNG" class="nav-logo">
        <h2>DIRT ROLLOFFS</h2>
    </div>

    <nav class="header-right">
        <a href="index.php">Home</a>
        <a href="services.php">Services</a>
        <a href="gallery.php">Gallery</a>
        <a href="about.php">About</a>
        <a href="faq.php">FAQ</a>
        <a href="contact.php">Contact</a>
    </nav>

    <div class="hamburger" id="hamburger">☰</div>
    <button class="dark-toggle" id="darkToggle">🌙</button>
</header>

<section class="why reveal slide-up">
    <h1>Contact Us</h1>

    <div class="text-box glow-border reveal slide-left">
        <p><strong>Phone:</strong></p>
        <p>📞 845‑933‑1925</p>
        <p>📞 845‑933‑1035</p>

        <p><strong>Email:</strong></p>
        <p>📧 Dirtrolloffs@gmail.com</p>

        <p><strong>Service Area:</strong></p>
        <p>Ulster, Dutchess & Orange County</p>
    </div>

    <form class="contact-form glow-border reveal slide-right" method="POST">

        <?php if ($success): ?>
            <p class="form-success" style="display:block;">Your message has been sent!</p>
        <?php elseif ($error): ?>
            <p class="form-error" style="display:block; color:red;"><?php echo htmlspecialchars($error); ?></p>
        <?php endif; ?>

        <div class="form-group">
            <input type="text" name="name" required placeholder=" ">
            <label>Your Name</label>
        </div>

        <div class="form-group">
            <input type="email" name="email" required placeholder=" ">
            <label>Your Email</label>
        </div>

        <div class="form-group">
            <input type="tel" name="phone" required placeholder=" ">
            <label>Your Phone Number</label>
        </div>

        <div class="form-group">
            <textarea name="message" required placeholder=" "></textarea>
            <label>Your Message</label>
        </div>

        <button type="submit" class="call-btn pulse">Send Message</button>
    </form>
</section>

<footer class="site-footer reveal slide-up">
    <p class="footer-bottom">© DIRT ROLLOFFS. All Rights Reserved.</p>
</footer>

</body>
</html>
