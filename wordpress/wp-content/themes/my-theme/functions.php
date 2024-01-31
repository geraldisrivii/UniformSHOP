<?php


require_once get_template_directory() . '/vendor/autoload.php';

require_once(get_template_directory() . '/App/index.php');

add_action('wp_enqueue_scripts', 'wp_enqueue_scripts_func');
function wp_enqueue_scripts_func()
{
    wp_enqueue_script('main', get_template_directory_uri() . '/assets/js/main.js', [], null, true);
    wp_enqueue_script('preloader', get_template_directory_uri() . '/libs/preloader.js', [], null, true);

}


add_filter('woocommerce_rest_check_permissions', 'disable_ssl_verification_for_local_development', 10, 4);
function disable_ssl_verification_for_local_development($permission, $context, $object_id, $post_type)
{
    if (!is_ssl()) {
        return true;
    }
    return $permission;
}