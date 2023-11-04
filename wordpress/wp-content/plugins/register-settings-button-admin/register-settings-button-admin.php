<?php 

/*
Plugin Name: Register settings button in admin panel plugin
Description: Register settings button in admin panel
Version: 1.0
Author: Alexander Malstev
*/


$post_ID = 154;

function settings_menu()
{
	add_menu_page('Настройки сайта', 'Настройки сайта', 'edit_posts', 'site_seetings', 'settings_page');
}

function settings_page()
{
	global $post_ID;
	wp_redirect(get_home_url() . "/wp-admin/post.php?post={$post_ID}&action=edit");
}
add_action('admin_menu', 'settings_menu');


add_action('pre_get_posts', 'exclude_post_from_admin');

function exclude_post_from_admin($query)
{
	global $post_ID;
	if (is_admin() && $query->get('post_type') == 'post') {
		$query->set('post__not_in', [$post_ID]);
	}
}
