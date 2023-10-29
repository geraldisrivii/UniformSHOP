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
                'return_url' => 'https://legal-services.site/katalog',
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
			return true;
		},
	]);
});

function sendMailCallback(){

	global $settings;

	$mail_settings = $settings['mail_settings_dev'];

	$response = new WP_REST_Response();

	$to = "aleksander.freelancer@gmail.com"; // Адрес получателя

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
		$mail->Subject = 'Here is the subject';
		$mail->Body    = 'This is the HTML message body <b>in bold!</b>';
		$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
	
		$mail->send();
		
	} catch (PHPMailer\PHPMailer\Exception $th) {
		return $response->data = [
			'status' => false,
			'message' => "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"
		];
	}

	return $response->data = [
		'status' => true,
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
	];

	$validator = new Validator($userRequest);
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

	$userWP = null;

	if(!$user){
		$time = time();

		$email = "user_{$time}@example.com";
	
		$user_id = wp_create_user($userRequest['login'], $userRequest['password'], $email);

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




