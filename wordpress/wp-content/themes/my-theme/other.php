<?php

add_action('pre_get_posts', 'exclude_post_from_admin');

function exclude_post_from_admin($query)
{
	if (is_admin() && $query->get('post_type') == 'post') {
		$query->set('post__not_in', [154]);
	}
}


// function custom_cors_headers($headers) {
//     // $headers['Access-Control-Allow-Origin'] = 'http://localhost:8080';
//     $headers['Access-Control-Allow-Headers'] = '*';

//     return $headers;
// }
// add_filter('wp_headers', 'custom_cors_headers');