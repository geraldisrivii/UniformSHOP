<?php


namespace App\Controllers;
use \WP_REST_Request;
use \WP_REST_Response;


class AdminController{

    public function show(WP_REST_Request $request){
        
        $response = new WP_REST_Response();

        $post = get_post(GENERALY_SETTINGS_ID);

        $response->data['id'] = $post->ID;
    
        foreach ($post as $key => $value) {
            $response->data[$key] = $value;
        }
    
        unset($response->data['ID']);
    
        $response = apply_filters('pre_get_settings', $response, $post);
    
        return $response;

    }

}