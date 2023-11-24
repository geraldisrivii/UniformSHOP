<?php


namespace App\Controllers;
use \WP_REST_Request;
use \WP_REST_Response;


class SessionController{

    public function create(WP_REST_Request $request){
        $response = new WP_REST_Response();

        if(isset($_COOKIE['auth'])){
            $response->data = [
                'status' => false,
                'cookies' => $_COOKIE['auth']
            ];
            return $response;
        }
    
        $result = setcookie('auth', wp_hash_password( 'someone' ), [
            'secure' => true,
            'path' => '/',
            'sameSite' => 'None',
            'expires' => time() + 5000 * 60 * 60
        ]);
    
        $response->data = [
            'status' => $result,
            'cookies' => $_COOKIE['auth']
        ];
        
        return $response->data = [
            'status' => $result,
            'cookies' => $_COOKIE['auth']
        ];;
    }

}