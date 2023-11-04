FROM wordpress:6.2.2-php8.0-fpm

# Установка composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Установка библиотеки libcurl
RUN apt-get update && apt-get install -y libcurl4-openssl-dev

WORKDIR .