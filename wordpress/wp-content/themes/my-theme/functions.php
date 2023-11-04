<?php

require_once(ABSPATH . 'wp-load.php');
require_once ABSPATH . 'wp-admin/includes/file.php';
require_once get_home_path() . '/vendor/autoload.php'; 


require_once __DIR__ . '/Facades/Session.php';


$settings = require_once __DIR__ . '/settings.php';


require_once __DIR__ . '/routes.php';

require_once __DIR__ . '/CPT.php';

add_action('wp_enqueue_scripts', 'wp_enqueue_scripts_func');
add_action('init', 'init_func');

use App\Controllers\TestController;

function init_func(){
    // $method = 'someMethod';
    // $instance = new TestController();
    // $instance = $instance::class;
    // $str = "$instance->$method";
    // [$class, $method] = explode("->", $str);

    // $instance = new $class();
    // print_r($instance->$method());
}

function wp_enqueue_scripts_func(){
    
    wp_enqueue_script('chunk-vendors', get_template_directory_uri() . '/assets/js/chunk-vendors.js', [], null, true);
    wp_enqueue_script('main', get_template_directory_uri() . '/assets/js/main.js', [], null, true);

}



