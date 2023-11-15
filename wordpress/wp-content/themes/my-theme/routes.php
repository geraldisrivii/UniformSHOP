<?php 

use App\Classes\Router;


add_action('rest_api_init', function () {
	// Payments 
	Router::post('/payments', 'PaymentController@create', 'HasCookieMiddleware');
	Router::post('/payments/webhook', 'PaymentController@webhookCallback');
	// Admin
	Router::get('/settings', 'AdminController@show');
	// Session
	Router::post('/sessions', 'SessionController@create');

	// User
	Router::post('/users/signup', 'UserController@signup', 'HasCookieMiddleware');
	Router::post('/users/signin', 'UserController@signin', 'HasCookieMiddleware');
	Router::delete('/users/signout', 'UserController@signout', 'HasCookieMiddleware');
	Router::get('/users/check_by_field', 'UserController@checkExistingUser');
	
	Router::get('/users/current', 'UserController@getCurrentUser', 'HasCookieMiddleware');

	// Mail
	Router::post('/mails', 'MailController@create', 'HasCookieMiddleware');
	Router::post('/mails/check', 'MailController@checkCode', 'HasCookieMiddleware');

});


