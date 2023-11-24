<?php


namespace App\Middlewares;

class HasCookieMiddleware{    
    public function prepare(){
        return isset($_COOKIE['auth']) ? wp_check_password('someone', $_COOKIE['auth']) : false;
    }
}