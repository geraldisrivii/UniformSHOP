<?php
// require_once get_template_directory(  ) . '/Classes/Session.php';

use App\Classes\Session;

function session(){

    $session = new Session();

    return  $session;

}