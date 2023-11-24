<?php


/*
Plugin Name: WOO Reviews images and title
Description: Allow using images and title in woo reviews. 
Version: 1.0
Author: Alexander Malstev
*/


add_action('init', 'add_custom_fields_to_wc_comment');

function add_custom_fields_to_wc_comment()
{
	register_meta('comment', 'images', [
		'type' => 'string',
		'description' => 'images of review',
		'default' => '[]',
	]);
	register_meta('comment', 'title', [
		'type' => 'string',
		'description' => 'Title of review',
		'default' => '',
	]);
}

function update_custom_field_after_insert_product_review($comment, $request)
{

	$title = $_POST['title'];
	
	update_metadata('comment', $comment->comment_ID, 'title', $title);

	if(empty($_FILES['images'])){
		return;
	}

	$meta_key = 'images';

	$images = $_FILES['images'];

	$upload_dir = wp_upload_dir();

	$uploads_path = $upload_dir['path']; 

	$uploads_url = $upload_dir['url']; 

	$results = [];

	$returnedData = [];

	foreach ($images['tmp_name'] as $key => $tmp_images_name) {
		$file_name = $comment->comment_ID . '_' . time() . '_' . $key;

		$filepath = $uploads_path . '/' . $file_name . substr($images['name'][$key], mb_strrpos($images['name'][$key], '.'));

		$result = move_uploaded_file($tmp_images_name, $filepath);

		$returnedData[] = [
			'path' =>  $uploads_url . '/' . $file_name . substr($images['name'][$key], mb_strrpos($images['name'][$key], '.')),
			'result' => $result,
		];

		$results[] = $result;
	}

	if(!in_array(false, $results)){
		update_metadata('comment', $comment->comment_ID, $meta_key, json_encode($returnedData));
		return;
	}
}
add_action('woocommerce_rest_insert_product_review', 'update_custom_field_after_insert_product_review', 10, 3);


function custom_wc_rest_prepare_product_review($response, $server, $request)
{
	$data = $response->get_data();
	$meta_data = get_metadata('comment', $data['id'], 'images', 'single');

	// print_r(gettype($meta_data));

	if(gettype($meta_data) == 'string'){
		try {
			$data['images'] = json_decode($meta_data, true);
		} catch (Throwable $th) {
			$data['images'] = $meta_data;
		}
	}

	$tille = get_metadata('comment', $data['id'], 'title', 'single');

	$data['title'] = $tille;

	$response->set_data($data);

	return $response;
}
add_filter('woocommerce_rest_prepare_product_review', 'custom_wc_rest_prepare_product_review', 10, 3);