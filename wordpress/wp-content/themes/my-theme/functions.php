<?php

require_once(ABSPATH . 'wp-load.php');
require_once(ABSPATH . 'wp-admin/includes/file.php');

require_once get_template_directory(  ) . '/vendor/autoload.php'; 


require_once __DIR__ . '/App/helpers.php';


require_once __DIR__ . '/App/routes.php';

require_once __DIR__ . '/App/CPT.php';

add_action('wp_enqueue_scripts', 'wp_enqueue_scripts_func');
add_action('init', 'init_func');

// use App\Controllers\TestController;

function init_func(){
    // print_r(require_once get_template_directory(  ) . '/vendor/autoload.php');
}

function wp_enqueue_scripts_func(){
    
    wp_enqueue_script('chunk-vendors', get_template_directory_uri() . '/assets/js/chunk-vendors.js', [], null, true);
    wp_enqueue_script('main', get_template_directory_uri() . '/assets/js/main.js', [], null, true);

}




add_filter('woocommerce_rest_check_permissions', 'disable_ssl_verification_for_local_development', 10, 4);
function disable_ssl_verification_for_local_development($permission, $context, $object_id, $post_type) {
    if (!is_ssl()) {
        return true;
    }
    return $permission;
}