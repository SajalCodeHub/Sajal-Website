# Personal Portfolio Website – sajalbhattarai.com

This is my personal portfolio website, built to showcase my background, skills, and projects. The site features a modern and responsive design with animations and interactive components. It includes a contact form that uses PHPMailer and reCAPTCHA for secure email submission.

##  Technology Stack

Frontend:
- HTML5
- CSS3
- JavaScript

Backend:
- PHP (for form handling)
- PHPMailer (for sending emails)
- Google reCAPTCHA v2 (for spam protection)

Deployment:
- GitHub (for version control)
- Render (for hosting a dynamic PHP web service)
- Custom Domain: sajalbhattarai.com (with HTTPS via Render)

##  Features

- Fully responsive design for desktop and mobile
- Glowing sticky navbar with smooth scroll effect
- Animated background on landing section
- Project portfolio showcase
- Blog section for updates or articles
- Secure contact form using PHP + PHPMailer + reCAPTCHA
- Professional layout and engaging UI

## 📁 Project Structure

/public
├── index.html ← Home page
├── main.html ← Central layout or redirection page
├── about.html ← About Me section
├── projects.html ← Portfolio / Projects page
├── blog.html ← Blog section
├── hire.html ← Contact / Hire Me form
├── style.css ← Main CSS styling
├── script.js ← JavaScript functionality
├── assets/ ← Images, icons, and other media

/send-email.php ← Backend email handler (PHPMailer)
/Dockerfile ← PHP server setup for Render
/redeploy.txt ← Used to trigger manual redeploy on Render

## 🛠️ Installation Instructions (Run Locally)

### Prerequisites:
- PHP installed on your machine (PHP 7.4 or higher)
- A local server (e.g., XAMPP)
- Internet connection (for reCAPTCHA)

### Steps:

1. **Clone the Repository**

```bash
git clone https://github.com/SajalCodeHub/Sajal-Website.git
cd Sajal-Website

Move Files to Your Local Server Directory**

For XAMPP:

Copy the entire folder into htdocs (e.g., C:/xampp/htdocs/Sajal-Website)

Start Apache Server

Open XAMPP and start Apache.

Configure PHPMailer

Edit send-email.php and update the following:
$mail->Host = 'smtp.example.com';      // Your SMTP host
$mail->Username = 'your@email.com';    // Your email
$mail->Password = 'yourpassword';      // Your email password or app key
$mail->setFrom('your@email.com');
$mail->addAddress('your@email.com');   // Where the message should be sent

Set Up reCAPTCHA

Go to Google reCAPTCHA

Register your site and get the site key and secret key

Replace those in your form and backend logic

Access the Site Locally
http://localhost/Sajal-Website/public/index.html

If using PHP for the form:
http://localhost/Sajal-Website/public/hire.html



Hosting Details

The site is hosted on Render using a dynamic web service configured for PHP. The GitHub repository is linked to Render for continuous deployment. A custom domain (`sajalbhattarai.com`) is connected with full DNS configuration and HTTPS enabled.

  Contact
You can test the contact form locally once PHPMailer and reCAPTCHA are properly configured. Messages will be sent directly to your configured email address.




