<?php
require_once get_template_directory(  ) . '/Classes/Session.php';

function session(){

    $session = new Session();

    return  $session;

}