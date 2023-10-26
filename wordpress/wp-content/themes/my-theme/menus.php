<?php


function settings_menu()
{
	add_menu_page('Настройки сайта', 'Настройки сайта', 'edit_posts', 'site_seetings', 'settings_page');
}

function settings_page()
{
	// print_r('hello');
	// require_once dirname(__FILE__) . '/index.php';
	wp_redirect(get_home_url() . '/wp-admin/post.php?post=154&action=edit');
}
add_action('admin_menu', 'settings_menu');