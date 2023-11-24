<?php

add_action('init', 'register_post_types');

function register_post_types()
{

	register_post_type('diginity', [
		'label' => null,
		'labels' => [
			'name' => 'Преимущества',
			// основное название для типа записи
			'singular_name' => 'Преимущество',
			// название для одной записи этого типа
			'add_new' => 'Добавить новое преимущество',
			// для добавления новой записи
			'add_new_item' => 'Добавление преимущества',
			// заголовка у вновь создаваемой записи в админ-панели.
			'edit_item' => 'Редактирование преимущества',
			// для редактирования типа записи
			'new_item' => 'Новое преимущество',
			// текст новой записи
			'view_item' => 'Смотреть преимущество',
			// для просмотра записи этого типа.
			'search_items' => 'Искать преимущество =',
			// для поиска по этим типам записи
			'not_found' => 'Не найдено',
			// если в результате поиска ничего не было найдено
			'not_found_in_trash' => 'Не найдено в корзине',
			// если не было найдено в корзине
			'parent_item_colon' => '',
			// для родителей (у древовидных типов)
			'menu_name' => 'Преимущества',
			// название меню
		],
		'description' => '',
		'public' => true,
		// 'publicly_queryable'  => null, // зависит от public
		// 'exclude_from_search' => null, // зависит от public
		// 'show_ui'             => null, // зависит от public
		// 'show_in_nav_menus'   => null, // зависит от public
		'show_in_menu' => null,
		// показывать ли в меню админки
		// 'show_in_admin_bar'   => null, // зависит от show_in_menu
		'show_in_rest' => true,
		// добавить в REST API. C WP 4.7
		'rest_base' => 'diginities',
		// $post_type. C WP 4.7
		'menu_position' => null,
		'menu_icon' => null,
		//'capability_type'   => 'post',
		//'capabilities'      => 'post', // массив дополнительных прав для этого типа записи
		//'map_meta_cap'      => null, // Ставим true чтобы включить дефолтный обработчик специальных прав
		'hierarchical' => false,
		'supports' => ['title', 'editor'],
		// 'title','editor','author','thumbnail','excerpt','trackbacks','custom-fields','comments','revisions','page-attributes','post-formats'
		'taxonomies' => [],
		'has_archive' => false,
		'rewrite' => true,
		'query_var' => true,
	]);


	register_post_type('FAQ', [
		'label' => null,
		'labels' => [
			'name' => 'FAQ',
			// основное название для типа записи
			'singular_name' => 'FAQ',
			// название для одной записи этого типа
			'add_new' => 'Добавить новое FAQ',
			// для добавления новой записи
			'add_new_item' => 'Добавление FAQ',
			// заголовка у вновь создаваемой записи в админ-панели.
			'edit_item' => 'Редактирование FAQ',
			// для редактирования типа записи
			'new_item' => 'Новое FAQ',
			// текст новой записи
			'view_item' => 'Смотреть FAQ',
			// для просмотра записи этого типа.
			'search_items' => 'Искать FAQ',
			// для поиска по этим типам записи
			'not_found' => 'Не найдено',
			// если в результате поиска ничего не было найдено
			'not_found_in_trash' => 'Не найдено в корзине',
			// если не было найдено в корзине
			'parent_item_colon' => '',
			// для родителей (у древовидных типов)
			'menu_name' => 'FAQ',
			// название меню
		],
		'description' => '',
		'public' => true,
		// 'publicly_queryable'  => null, // зависит от public
		// 'exclude_from_search' => null, // зависит от public
		// 'show_ui'             => null, // зависит от public
		// 'show_in_nav_menus'   => null, // зависит от public
		'show_in_menu' => null,
		// показывать ли в меню админки
		// 'show_in_admin_bar'   => null, // зависит от show_in_menu
		'show_in_rest' => true,
		// добавить в REST API. C WP 4.7
		'rest_base' => 'faqs',
		// $post_type. C WP 4.7
		'menu_position' => null,
		'menu_icon' => null,
		//'capability_type'   => 'post',
		//'capabilities'      => 'post', // массив дополнительных прав для этого типа записи
		//'map_meta_cap'      => null, // Ставим true чтобы включить дефолтный обработчик специальных прав
		'hierarchical' => false,
		'supports' => ['title', 'editor'],
		// 'title','editor','author','thumbnail','excerpt','trackbacks','custom-fields','comments','revisions','page-attributes','post-formats'
		'taxonomies' => [],
		'has_archive' => false,
		'rewrite' => true,
		'query_var' => true,
	]);

	register_post_type('review', [
		'label' => null,
		'labels' => [
			'name' => 'Отзывы',
			// основное название для типа записи
			'singular_name' => 'отзыв',
			// название для одной записи этого типа
			'add_new' => 'Добавить новое отзыв',
			// для добавления новой записи
			'add_new_item' => 'Добавление отзыва',
			// заголовка у вновь создаваемой записи в админ-панели.
			'edit_item' => 'Редактирование отзыва',
			// для редактирования типа записи
			'new_item' => 'Новое отзыв',
			// текст новой записи
			'view_item' => 'Смотреть отзыв',
			// для просмотра записи этого типа.
			'search_items' => 'Искать отзыв =',
			// для поиска по этим типам записи
			'not_found' => 'Не найдено',
			// если в результате поиска ничего не было найдено
			'not_found_in_trash' => 'Не найдено в корзине',
			// если не было найдено в корзине
			'parent_item_colon' => '',
			// для родителей (у древовидных типов)
			'menu_name' => 'Отзывы',
			// название меню
		],
		'description' => '',
		'public' => true,
		// 'publicly_queryable'  => null, // зависит от public
		// 'exclude_from_search' => null, // зависит от public
		// 'show_ui'             => null, // зависит от public
		// 'show_in_nav_menus'   => null, // зависит от public
		'show_in_menu' => null,
		// показывать ли в меню админки
		// 'show_in_admin_bar'   => null, // зависит от show_in_menu
		'show_in_rest' => true,
		// добавить в REST API. C WP 4.7
		'rest_base' => 'reviews',
		// $post_type. C WP 4.7
		'menu_position' => null,
		'menu_icon' => null,
		//'capability_type'   => 'post',
		//'capabilities'      => 'post', // массив дополнительных прав для этого типа записи
		//'map_meta_cap'      => null, // Ставим true чтобы включить дефолтный обработчик специальных прав
		'hierarchical' => false,
		'supports' => ['title', 'editor'],
		// 'title','editor','author','thumbnail','excerpt','trackbacks','custom-fields','comments','revisions','page-attributes','post-formats'
		'taxonomies' => [],
		'has_archive' => false,
		'rewrite' => true,
		'query_var' => true,
	]);

	register_post_type('special', [
		'label' => null,
		'labels' => [
			'name' => 'Специальные предложения',
			// основное название для типа записи
			'singular_name' => 'Специальные предложение',
			// название для одной записи этого типа
			'add_new' => 'Добавить новое предложение',
			// для добавления новой записи
			'add_new_item' => 'Добавление предложения',
			// заголовка у вновь создаваемой записи в админ-панели.
			'edit_item' => 'Редактирование предложения',
			// для редактирования типа записи
			'new_item' => 'Новое предложение',
			// текст новой записи
			'view_item' => 'Смотреть предложение',
			// для просмотра записи этого типа.
			'search_items' => 'Искать предложение',
			// для поиска по этим типам записи
			'not_found' => 'Не найдено',
			// если в результате поиска ничего не было найдено
			'not_found_in_trash' => 'Не найдено в корзине',
			// если не было найдено в корзине
			'parent_item_colon' => '',
			// для родителей (у древовидных типов)
			'menu_name' => 'Специальные предложения',
			// название меню
		],
		'description' => '',
		'public' => true,
		// 'publicly_queryable'  => null, // зависит от public
		// 'exclude_from_search' => null, // зависит от public
		// 'show_ui'             => null, // зависит от public
		// 'show_in_nav_menus'   => null, // зависит от public
		'show_in_menu' => null,
		// показывать ли в меню админки
		// 'show_in_admin_bar'   => null, // зависит от show_in_menu
		'show_in_rest' => true,
		// добавить в REST API. C WP 4.7
		'rest_base' => 'specials',
		// $post_type. C WP 4.7
		'menu_position' => null,
		'menu_icon' => null,
		//'capability_type'   => 'post',
		//'capabilities'      => 'post', // массив дополнительных прав для этого типа записи
		//'map_meta_cap'      => null, // Ставим true чтобы включить дефолтный обработчик специальных прав
		'hierarchical' => false,
		'supports' => ['title', 'editor'],
		// 'title','editor','author','thumbnail','excerpt','trackbacks','custom-fields','comments','revisions','page-attributes','post-formats'
		'taxonomies' => [],
		'has_archive' => false,
		'rewrite' => true,
		'query_var' => true,
	]);

}