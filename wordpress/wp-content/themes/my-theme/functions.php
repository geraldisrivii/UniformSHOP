<?php
require_once __DIR__ . '/lib/autoload.php'; 
require_once __DIR__ . '/Facades/Session.php';
use YooKassa\Client;

$settings = require_once __DIR__ . '/settings.php';


function init(){
}

add_action( 'init', 'init');

require_once __DIR__ . '/routes.php';

require_once __DIR__ . '/scripts.php';

require_once __DIR__ . '/menus.php';

require_once __DIR__ . '/restFilters.php';

require_once __DIR__ . '/CPT.php';

require_once __DIR__ . '/other.php';






