# installation

## frontend

- npm install
- npm run watch

## backend

- composer install
- cp .env.example .env
- php artisan key:generate
- php artisan mysql:createdb (créer la bdd)
- php artisan migrate:refresh --seed
- php artisan serve
