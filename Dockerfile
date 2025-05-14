FROM php:8.2-apache

RUN a2enmod rewrite

# Optional: Suppress Apache hostname warning
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf

# Serve your public folder
COPY public/ /var/www/html/

RUN chown -R www-data:www-data /var/www/html
