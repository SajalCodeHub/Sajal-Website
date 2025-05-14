<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

ini_set('display_errors', 1);
error_reporting(E_ALL);

header('Content-Type: application/json');

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$response = [];

// ✅ reCAPTCHA secret key
$secretKey = '6Ld2FDkrAAAAAL0umtAcn8FaGLpI00UN2d4cDWPf';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // ✅ Verify reCAPTCHA
    $recaptchaResponse = $_POST['g-recaptcha-response'] ?? '';
    $verifyURL = 'https://www.google.com/recaptcha/api/siteverify';
    
    $recaptcha = file_get_contents($verifyURL . '?secret=' . $secretKey . '&response=' . $recaptchaResponse);
    $recaptcha = json_decode($recaptcha);

    if (!$recaptcha->success) {
        echo json_encode([
            "success" => false,
            "message" => "Please complete the reCAPTCHA to verify you're human."
        ]);
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        // SMTP settings
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'me.sajal.25@gmail.com';
        $mail->Password   = 'wixqzzrnuozglpom'; // App password
        $mail->SMTPSecure = 'tls';
        $mail->Port       = 587;

        $mail->setFrom('me.sajal.25@gmail.com', 'Sajal Website Form');
        $mail->addAddress('me.sajal.25@gmail.com');

        // Collect form data
        $name           = $_POST['name'] ?? '';
        $email          = $_POST['email'] ?? '';
        $specialization = $_POST['specialization'] ?? '';
        $collabType     = $_POST['collabType'] ?? '';
        $project        = $_POST['project'] ?? '';
        $message        = $_POST['message'] ?? '';

        $body = "<strong>New submission from your website:</strong><br><br>";
        $body .= "Name: {$name}<br>Email: {$email}<br><br>";

        if ($specialization || $collabType || $project) {
            $body .= "Specialization: {$specialization}<br>";
            $body .= "Collaboration Type: {$collabType}<br>";
            $body .= "Project Details:<br>" . nl2br($project) . "<br>";
        }

        if ($message) {
            $body .= "Message:<br>" . nl2br($message);
        }

        $mail->isHTML(true);
        $mail->Subject = 'New Website Form Submission';
        $mail->Body    = $body;

        $mail->send();

        echo json_encode([
            "success" => true,
            "message" => "Proposal sent successfully! I’ll reach out to you soon."
        ]);
    } catch (Exception $e) {
        echo json_encode([
            "success" => false,
            "message" => "Mailer Error: " . $mail->ErrorInfo
        ]);
    }
} else {
    echo json_encode([
        "success" => false,
        "message" => "Invalid request method."
    ]);
}
?>
