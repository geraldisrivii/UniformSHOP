<?php
namespace App;

require_once(ABSPATH . 'wp-load.php');
require_once(ABSPATH . 'wp-admin/includes/file.php');


require_once get_template_directory(  ) . '/vendor/autoload.php'; 

require_once __DIR__ . '/helpers.php';


require_once __DIR__ . '/routes.php';

require_once __DIR__ . '/CPT.php';