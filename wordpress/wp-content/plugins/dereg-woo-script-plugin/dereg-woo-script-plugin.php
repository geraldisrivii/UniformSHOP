<?php 

/*
Plugin Name: Deregister WOO scripts plugin
Description: Deregister WOO scripts
Version: 1.0
Author: Alexander Malstev
*/


add_action('wp_enqueue_scripts', 'wp_dereg_scripts_func');

function wp_dereg_scripts_func()
{
	// Deregister stylesheets
	wp_deregister_style('wc-blocks-style');
	wp_deregister_style('wc-blocks-style-active-filters');
	wp_deregister_style('wc-blocks-style-add-to-cart-form');
	wp_deregister_style('wc-blocks-packages-style');
	wp_deregister_style('wc-blocks-style-all-products');
	wp_deregister_style('wc-blocks-style-all-reviews');
	wp_deregister_style('wc-blocks-style-attribute-filter');
	wp_deregister_style('wc-blocks-style-breadcrumbs');
	wp_deregister_style('wc-blocks-style-catalog-sorting');
	wp_deregister_style('wc-blocks-style-customer-account');
	wp_deregister_style('wc-blocks-style-featured-category');
	wp_deregister_style('wc-blocks-style-featured-product');
	wp_deregister_style('wc-blocks-style-mini-cart');
	wp_deregister_style('wc-blocks-style-price-filter');
	wp_deregister_style('wc-blocks-style-product-add-to-cart');
	wp_deregister_style('wc-blocks-style-product-button');
	wp_deregister_style('wc-blocks-style-product-categories');

	wp_deregister_style('wc-blocks-style-product-image');
	wp_deregister_style('wc-blocks-style-product-image-gallery');
	wp_deregister_style('wc-blocks-style-product-query');
	wp_deregister_style('wc-blocks-style-product-results-count');
	wp_deregister_style('wc-blocks-style-product-reviews');
	wp_deregister_style('wc-blocks-style-product-sale-badge');
	wp_deregister_style('wc-blocks-style-product-search');
	wp_deregister_style('wc-blocks-style-product-sku');
	wp_deregister_style('wc-blocks-style-product-stock-indicator');
	wp_deregister_style('wc-blocks-style-product-summary');
	wp_deregister_style('wc-blocks-style-product-title');
	wp_deregister_style('wc-blocks-style-rating-filter');
	wp_deregister_style('wc-blocks-style-reviews-by-category');
	wp_deregister_style('wc-blocks-style-reviews-by-product');
	wp_deregister_style('wc-blocks-style-product-details');
	wp_deregister_style('wc-blocks-style-single-product');
	wp_deregister_style('wc-blocks-style-stock-filter');
	wp_deregister_style('wc-blocks-style-cart');

	wp_deregister_style('wc-blocks-style-checkout');
	wp_deregister_style('wc-blocks-style-mini-cart-contents');
	wp_deregister_style('classic-theme-styles');

	wp_deregister_style('woocommerce-layout');
	wp_deregister_style('woocommerce-smallscreen');
	wp_deregister_style('woocommerce-general');
	wp_deregister_style('wp-block-library');

	wp_dequeue_style('dashicons');

	// Dequeue scripts
	wp_dequeue_script('jquery-blockui');
	wp_dequeue_script('wc-add-to-cart');
	wp_dequeue_script('js-cookie');
	wp_dequeue_script('woocommerce');

	// Deregister scripts
	wp_deregister_script('wc-blocks-frontend');
}
