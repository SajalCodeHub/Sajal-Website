# 🌐 Personal Portfolio Website – sajalbhattarai.com

This is my personal portfolio website, built to showcase my background, skills, and projects. The site features a modern and responsive design with animations and interactive components. It includes a contact form that uses PHPMailer and reCAPTCHA for secure email submission.

## 🔧 Technology Stack

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

## 🚀 Features

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


## 🖥 Hosting Details

The site is hosted on Render using a dynamic web service configured for PHP. The GitHub repository is linked to Render for continuous deployment. A custom domain (`sajalbhattarai.com`) is connected with full DNS configuration and HTTPS enabled.

## 📬 Contact

Visitors can use the "Hire Me" section to submit proposals or send messages securely. The form collects name, email, and message, and is protected from bots using Google reCAPTCHA.


