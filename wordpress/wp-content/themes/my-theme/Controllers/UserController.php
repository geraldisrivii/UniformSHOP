<?php


namespace App\Controllers;
use \WP_REST_Request;
use \WP_REST_Response;
use \WP_User;
use App\Classes\Validator;


class UserController{

    public function signup(WP_REST_Request $request){

        $response = new WP_REST_Response();

        $userRequest = [
            'login' => $request['login'],
            'password' => $request['password'],
            'email' => $request['email']
        ];
    
        $validator = new Validator($userRequest);
        $validator->add_rules([
            'login' => '/[A-Za-z0-9]{6,15}/',
            'password' => '/[A-Za-z0-9]{6,20}[0-9]+/',
            'email' => '/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/'
        ]);
        $validData = $validator->run();
    
        if (!$validator->is_valid_all()) {
            return $response->data = [
                'status' => false,
                'message' => 'Something fields isnt match to validation rules',
                'validated_fields' => $validData
            ]; 
        }
    
        $user = session()->get('user');
    
        $userWP = null;
    
        if(!$user){
            $time = time();
    
            $email = "user_{$time}@example.com";
        
            $user_id = wp_create_user($userRequest['login'], $userRequest['password'], $userRequest['email']);
    
            if (is_wp_error($user_id)) {
                $response->set_status( 400 );
                return $response->data = [
                    'user_id' => $user_id,
                    'status' => false,
                    'message' => isset($user_id->errors) ? $user_id->errors : 'something went wrong',
                ];
            }
            
    
            update_metadata( 'user', $user_id, 'isEmailVerified', false );
    
            $userWP = new WP_User($user_id);
            $userWP->set_role('customer');
    
            session()->add('user', $userWP);
    
            return $response->data = [
                'status' => true,
                'user' => $userWP,
                'message' => 'Succesfuly registered'
            ];
        }
    
    
        $response->data = [
            'status' => false,
            'user' => $user,
            'message' => 'Already registered'
        ];
        
        return $response;
    }

    public function signin(WP_REST_Request $request){
        $response = new WP_REST_Response();

        $userRequest = (object)[
            'login' => $request['login'],
            'password' => $request['password'],
        ];
    
        $validator = new Validator((array)$userRequest);
        $validator->add_rules([
            'login' => '/[A-Za-z0-9]{6,15}/',
            'password' => '/[A-Za-z0-9]{6,20}[0-9]+/',
        ]);
        $validData = $validator->run();
    
        if (!$validator->is_valid_all()) {
            return $response->data = [
                'status' => false,
                'message' => 'Something fields isnt match to validation rules',
                'validated_fields' => $validData
            ]; 
        }
    
        $user = session()->get('user');
    
        if($user){
            $response->set_status( 400 );
            return $response->data = [
                'status' => false,
                'message' => 'User already logged in'
            ];
        }
    
        $userWP = get_user_by( 'login', $userRequest->login );
        
        if($userWP == false){
            $response->set_status( 400 );
            return $response->data = [
                'status' => false,
                'message' => 'User with passed login, not found'
            ];
        }
        if(wp_check_password($userRequest->password, $userWP->user_pass, $userWP->ID)){
            $result = session()->add('user', $userWP);
            $userWP->is_email_verified = get_metadata( 'user', $userWP->ID, 'isEmailVerified', true );
            return $response->data = [
                'status' => true,
                'message' => 'Succesfuly logged in',
                'user' => $userWP,
            ];
        }
    
        $response->data = [
            'status' => false,
            'message' => 'User with passed login, have another password'
        ];
        return $response;
    }

    public function signout(WP_REST_Request $request){

        $response = new WP_REST_Response();

        $result = session()->remove('user');

        return $response->data = [
            'status' => $result,
        ];
    }

    public function getCurrentUser(WP_REST_Request $request){
        $response = new WP_REST_Response();

        $user = session()->get('user');

        if(!$user){
            return $response->data = false;
        }

        $user['data']['is_email_verified'] = (boolean)get_metadata( 'user', $user['ID'], 'isEmailVerified', true);

        $response->data = $user;
        
        return $response;
    }


    public function checkExistingUser(WP_REST_Request $request){
        $response = new WP_REST_Response();

        $name = $request['field'];

        $result = get_user_by( $name, $request['value'] );

        if($result){
            return $response->data = [
                'status' => false,
                'message' => "This {$name} already used"
            ];
        }

        return $response->data = [
            'status' => true,
            'message' => "This {$name} may be used"
        ];
    }
}