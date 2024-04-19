# laravel-10-react-18
laravel-10-react-18 Learning Project
Link - https://www.youtube.com/watch?v=hvtcQE8Gshs
1. composer create-project laravel/laravel laravel-10-react-18
2. composer require tymon/jwt-auth
3. change user database file and model
4. php artisan migrate
5. php artisan db::seed
6. php artisan vendor:publish --provider="Tymon\JWTAuth\Providers\LaravelServiceProvider"
7. php artisan jwt:secret
8. php artisan make:controller AuthController

26:00