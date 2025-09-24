<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Send an email
    $to = "sanjaythakor79844@gmail.com"; 
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nEmail: $email\nSubject: $subject\nMessage: $message";
    $headers = "From: $email";

    // Sending email
    if (mail($to, $subject, $body, $headers)) {
        echo "Your message has been sent successfully. Thank you!";
    } else {
        echo "Oops! Something went wrong.";
    }
} else {
    echo "Invalid request";
}
?>
