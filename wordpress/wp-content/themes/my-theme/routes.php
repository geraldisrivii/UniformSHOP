<?php 

require_once __DIR__ . '/lib/autoload.php'; 

require_once __DIR__ . '/vendor/autoload.php'; 

require_once __DIR__ . '/Classes/Session.php';

require_once __DIR__ . '/Classes/Validator.php';


require_once(ABSPATH . 'wp-load.php');


use YooKassa\Client;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

add_action('rest_api_init', function () {

	$namespace = 'wp/v2';

	// маршрут
	$route = '/createPayment';

	$route_params = [
		'methods' => 'POST',
		'callback' => 'create_payment_callback',
		'args' => [],
		'permission_callback' => function ($request) {
			return isset($_COOKIE['auth']) ? wp_check_password('someone', $_COOKIE['auth']) : false;
		},
	];

	register_rest_route($namespace, $route, $route_params);

});


function create_payment_callback(WP_REST_Request $request)
{
	$response = new WP_REST_Response();

	$client = new Client();

	$client->setAuth('321322', 'test_6u50VVu79MGLmELpPGMn3BySLTUO3EKTKzze6xxv82Q');
	
	
	$payment = $client->createPayment(
		array(
			'amount' => array(
                'value' => $request['amount'],
                'currency' => 'RUB',
            ),
            'confirmation' => array(
				'type' => 'redirect',
                'return_url' => 'http:localhost:8080/katalog',
            ),
            'capture' => true,
            'description' => 'Заказ №1',
        ),
        uniqid('', true)
    );
	
	if(session()->get('user') == false){
		return $response->data = [
			'status' => false,
			'message' => 'User insnt logged in or sign up'
		];
	}

	$order = wc_create_order(['customer_id' => session()->get('user')['ID']]);


	foreach ($request['items'] as $key => $item) {
		$order->add_product(get_product( $item['product']['id'] ), $item['quantity']);
	}

	
	$order->set_address(array(
		'first_name' => 'John',
		'last_name'  => 'Doe',
		'email'      => 'john.doe@example.com',
		'phone'      => '1234567890',
		'address_1'  => '123 Street',
		'address_2'  => 'Apartment 4',
		'city'       => 'City',
		'state'      => 'State',
		'postcode'   => '12345',
		'country'    => 'US'
	));
	
	
	$order->set_total($request['amount']);
	
	// Сохраняем заказ
	
	$order->set_customer_id(session()->get('user')['ID']);
	
	$order->calculate_totals();

	$result = update_post_meta($order->id, 'payment_id', $payment->id );

	$order->save();

	
	// $order->update_status('completed', 'Заказ создан', true);
	$response->data['yookassa_object'] = $payment;
	$response->data['order'] = $order->id;
	$response->data['result'] = session()->get('user')['ID'];
	// $response = apply_filters('pre_get_settings', $response, $post);
	
	return $response;
}


add_action('rest_api_init', function () {

	$namespace = 'wp/v2';

	// маршрут
	$route = '/getPaymentInfo';

	$route_params = [
		'methods' => 'GET',
		'callback' => 'getPaymentInfoCallback',
		'args' => [
			'id' => [
				'type'     => 'string', 
				'required' => true,     
			],
		],
		'permission_callback' => function ($request) {
			return true;
		},
	];

	register_rest_route($namespace, $route, $route_params);

});


function getPaymentInfoCallback(WP_REST_Request $request)
{
	$response = new WP_REST_Response();

	$client = new Client();

	$client->setAuth('321322', 'test_6u50VVu79MGLmELpPGMn3BySLTUO3EKTKzze6xxv82Q');

    $paymentId = $request['id'];

    $payment = $client->getPaymentInfo($paymentId);
	
	$response->data['status'] = $payment['status'];
	// $response = apply_filters('pre_get_settings', $response, $post);
	
	return $response;
}


add_action('rest_api_init', function () {

	$namespace = 'wp/v2';

	// маршрут
	$route = '/settings';

	$route_params = [
		'methods' => 'GET',
		'callback' => 'settings_post_callback',
		'args' => [
			// 'arg_str' => [
			// 	'type'     => 'string', 
			// 	'required' => true,     
			// ],
		],
		'permission_callback' => function ($request) {
			return true;
		},
	];

	register_rest_route($namespace, $route, $route_params);

});


function settings_post_callback(WP_REST_Request $request)
{

	$post = get_post(154);

	$response = new WP_REST_Response();
	$response->data['id'] = $post->ID;

	foreach ($post as $key => $value) {
		$response->data[$key] = $value;
	}

	unset($response->data['ID']);

	$response = apply_filters('pre_get_settings', $response, $post);

	return $response;
}




add_action('rest_api_init', function () {

	$namespace = 'wp/v2';

	// маршрут
	$route = '/getToken';

	$route_params = [
		'methods' => 'GET',
		'callback' => 'getTokenCallback',
		'args' => [
			
		],
		'permission_callback' => function ($request) {
			return true;
		},
	];

	register_rest_route($namespace, $route, $route_params);

});


function getTokenCallback(WP_REST_Request $request)
{
	$response = new WP_REST_Response();

	if(isset($_COOKIE['auth'])){
		$response->data = [
			'status' => true,
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
	
	return $response;
}





add_action('rest_api_init', function () {
	register_rest_route('wp/v2', '/register', [
		'methods' => 'POST',
		'callback' => 'registerCallback',
		'args' => [
			'login' => [
				'type'     => 'string', 
				'required' => true, 
			],
			'password' => [
				'type'     => 'string', 
				'required' => true, 
			],
		],
		
		'permission_callback' => function ($request) {
			return isset($_COOKIE['auth']) ? wp_check_password('someone', $_COOKIE['auth']) : false;
		},
	]);

	register_rest_route('wp/v2', '/getUserData', [
		'methods' => 'GET',
		'callback' => 'getUserDataCallback',
		'args' => [],
		'permission_callback' => function ($request) {
			return isset($_COOKIE['auth']) ? wp_check_password('someone', $_COOKIE['auth']) : false;
		},
	]);

	register_rest_route('wp/v2', '/login', [
		'methods' => 'POST',
		'callback' => 'loginCallback',
		'args' => [
			'login' => [
				'type'     => 'string', 
				'required' => true, 
			],
			'password' => [
				'type'     => 'string', 
				'required' => true, 
			],
		],
		'permission_callback' => function ($request) {
			return isset($_COOKIE['auth']) ? wp_check_password('someone', $_COOKIE['auth']) : false;
		},
	]);

	register_rest_route('wp/v2', '/webhook', [
		'methods' => 'POST',
		'callback' => 'webhookCallback',
		'args' => [],
		'permission_callback' => function ($request) {
			return true;
		},
	]);

	register_rest_route('wp/v2', '/singout', [
		'methods' => 'POST',
		'callback' => 'signOutCallback',
		'args' => [],
		'permission_callback' => function ($request) {
			return isset($_COOKIE['auth']) ? wp_check_password('someone', $_COOKIE['auth']) : false;
		},
	]);

	register_rest_route('wp/v2', '/sendMail', [
		'methods' => 'POST',
		'callback' => 'sendMailCallback',
		'args' => [],
		'permission_callback' => function ($request) {
			return isset($_COOKIE['auth']) ? wp_check_password('someone', $_COOKIE['auth']) : false;
		},
	]);

	register_rest_route('wp/v2', '/postCode', [
		'methods' => 'POST',
		'callback' => 'postCodeCallback',
		'args' => [],
		'permission_callback' => function ($request) {
			return isset($_COOKIE['auth']) ? wp_check_password('someone', $_COOKIE['auth']) : false;
		},
	]);

	register_rest_route('wp/v2', '/checkLogin', [
		'methods' => 'POST',
		'callback' => 'checkLoginCallback',
		'args' => [],
		'permission_callback' => function ($request) {
			return isset($_COOKIE['auth']) ? wp_check_password('someone', $_COOKIE['auth']) : false;
		},
	]);
	register_rest_route('wp/v2', '/checkEmail', [
		'methods' => 'POST',
		'callback' => 'checkEmailCallback',
		'args' => [],
		'permission_callback' => function ($request) {
			return isset($_COOKIE['auth']) ? wp_check_password('someone', $_COOKIE['auth']) : false;
		},
	]);
});


function checkEmailCallback(WP_REST_Request $request){
	$response = new WP_REST_Response();

	$result = get_user_by( 'email', $request['email'] );

	if($result){
		return $response->data = [
			'status' => false,
			'message' => 'This email already used'
		];
	}

	return $response->data = [
		'status' => true,
		'message' => 'This email may be used'
	];

}

function checkLoginCallback(WP_REST_Request $request){

	$response = new WP_REST_Response();

	$result = get_user_by( 'login', $request['login'] );

	if($result){
		return $response->data = [
			'status' => false,
			'message' => 'This login already used'
		];
	}

	return $response->data = [
		'status' => true,
		'message' => 'This login may be used'
	];

}

function postCodeCallback(WP_REST_Request $request){
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


function sendMailCallback(){

	global $settings;

	$mail_settings = $settings['mail_settings_dev'];

	$response = new WP_REST_Response();

	$user = session()->get('user');
	
	$to = $user['data']['user_email']; 

	// $to = "aleksander.freelancer@gmail.com";

	$code = random_int(1000, 9999);

	$result = session()->add('email_code', $code );

	$mail = new PHPMailer(true);

	try {
		$mail->SMTPDebug = 0;                      //Enable verbose debug output
		$mail->isSMTP();                                            //Send using SMTP
		$mail->Host       = $mail_settings['host'];                     //Set the SMTP server to send through
		$mail->SMTPAuth   = $mail_settings['auth'];                                   //Enable SMTP authentication
		$mail->Username   = $mail_settings['username'];                     //SMTP username
		$mail->Password   = $mail_settings['password'];                               //SMTP password
		$mail->SMTPSecure = $mail_settings['secure'];            //Enable implicit TLS encryption
		$mail->Port = $mail_settings['port'];             
		
		$mail->addAddress($to);
		

		$mail->isHTML($mail_settings['is_html']);                                  //Set email format to HTML
		$mail->Subject = 'Код подтверждения';
		$mail->Body    = "Скопируйте и вставьте в форму подтвержения на сайте данный код: <b>{$code}</b>";
		$mail->AltBody = "Скопируйте и вставьте в форму подтвержения на сайте данный код: {$code}";
	
		$mail->send();
		
	} catch (PHPMailer\PHPMailer\Exception $th) {
		return $response->data = [
			'status' => false,
			'message' => "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"
		];
	}

	return $response->data = [
		'status' => true,
		'result' => $result,
		'user' => $user,
		'settings' => $mail_settings
	];
}



function signOutCallback(){
	$result = session()->remove('user');

	$response = new WP_REST_Response();

	return $response->data = [
		'status' => $result,
	];
}


function webhookCallback()
{
	$data = json_decode(file_get_contents('php://input'));

	$response = new WP_REST_Response();

	$client = new Client();

	$client->setAuth('321322', 'test_6u50VVu79MGLmELpPGMn3BySLTUO3EKTKzze6xxv82Q');

	$payment_id = $data->object->id;

	
	$orders = get_posts( [
		'post_type'   => 'shop_order',
		'post_status' => 'any',
		'numberposts' => -1
	] );

	$currentOrder = null;
	foreach ($orders as $key => $order) {
		if(get_post_meta( $order->ID, 'payment_id', true ) == $payment_id){
			$payment = $client->getPaymentInfo($payment_id);

			$currentOrder = wc_get_order($order);

			$currentOrder->update_status($payment->status == 'succeeded' ? 'completed' : 'cancelled');

			$currentOrder->save();

			break;
		}
	}
	return $response->data = [
		'status' => true,
		'payment_id'=> $payment_id,
	];

}

function getUserDataCallback(WP_REST_Request $request)
{
	$response = new WP_REST_Response();

	$user = session()->get('user');

	if(!$user){
		return $response->data = false;
	}

	$user['data']['is_email_verified'] = (boolean)get_metadata( 'user', $user['ID'], 'isEmailVerified', true);

	$response->data = $user;
	
	return $response;
}

function loginCallback(WP_REST_Request $request)
{
	global $wpdb;
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

function registerCallback(WP_REST_Request $request)
{
	global $wpdb;
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




