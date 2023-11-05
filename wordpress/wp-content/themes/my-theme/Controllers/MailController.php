<?php


namespace App\Controllers;
use \WP_REST_Request;
use \WP_REST_Response;
use App\Classes\MailServise;


class MailController{

    public function create(WP_REST_Request $request){

        $response = new WP_REST_Response();

        $user = session()->get('user');
        
        $to = $user['data']['user_email']; 

        $code = random_int(1000, 9999);

        $result = session()->add('email_code', $code );

        $mail = new MailServise();


        try {
            $mail->send('Код потдверждения', "Скопируйте и вставте в форму: {$code}", $to);
        } catch (\Throwable $th) {
            return $response->data = [
                'status' => $th,
            ];
        }


        return $response->data = [
            'status' => true,
            'result' => $result,
            'user' => $user,
            'settings' => $mail_settings
        ];
    }

    public function checkCode(WP_REST_Request $request){
        $response = new WP_REST_Response();

        $code = session()->get('email_code');
    
        $requestedCode = $request['code'];
    
        if(!$code){
            return $response->data = [
                'status' => false,
                'message' => 'email code isnt have in session'
            ];
        }
        
        if($requestedCode != $code){
            return $response->data = [
                'status' => false,
                'message' => 'code isnt match to code in session'
            ];
        }
    
        update_metadata( 'user', session()->get('user')['ID'], 'isEmailVerified', true );
    
        session()->remove('email_code');
    
        return $response->data = [
            'status' => true,
        ];
    }

}