<?php


class Session{
    private static string $tableName = 'wp_sessions';

    private static $instance;

    private static function getCookieAuth(){
        if(isset($_COOKIE['auth'])){
            return $_COOKIE['auth'];
        }
        return null;
    }

    public function __construct(){
        if(Session::$instance){
            return Session::$instance;
        }
        global $wpdb;

        $db_name = $wpdb->dbname;

        $tableName = Session::$tableName;

        $result = false;

        if($wpdb->get_row("SHOW TABLES FROM $db_name LIKE '$tableName'")){
            $result = true;
        } else {
            $result = $wpdb->query("CREATE TABLE `WorpressDB`.`wp_sessions` (`id` INT NOT NULL AUTO_INCREMENT , `token` VARCHAR(40) NOT NULL , `data` JSON NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB");
        }

        if($result){
            $token = Session::getCookieAuth();

            $result = true;

            $tokenData = $wpdb->get_row( "SELECT * FROM $tableName WHERE `token` = '$token'");

            if(!$tokenData){
                $result = $wpdb->insert($tableName, ['id' => null, 'token' => $token, 'data' => '{"key": "value"}']);
            }
        }

        Session::$instance = $this;
    }

    public static function init(){
        global $wpdb;

        $db_name = $wpdb->dbname;

        $tableName = Session::$tableName;

        $result = false;

        if($wpdb->get_row("SHOW TABLES FROM $db_name LIKE '$tableName'")){
            $result = true;
        } else {
            $result = $wpdb->query("CREATE TABLE `$db_name`.`$tableName` (`id` INT NOT NULL AUTO_INCREMENT , `token` VARCHAR(40) NOT NULL , `data` JSON NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB");
        }

        if($result){
            $token = Session::getCookieAuth();

            $result = true;

            $tokenData = $wpdb->get_row( "SELECT * FROM $tableName WHERE `token` = '$token'");

            if(!$tokenData){
                $result = $wpdb->insert($tableName, ['id' => null, 'token' => $token, 'data' => '{"key": "value"}']);
            }
            return $result;
        }

        return $result;
    }

    public function add(string $key, $value){
        global $wpdb;

        $token = Session::getCookieAuth();

        $tableName = Session::$tableName;

        $result = $wpdb->get_row( "SELECT * FROM $tableName WHERE `token` = '$token'" );

        $sessionData = json_decode($result->data, true);

        $sessionData[$key] = $value;


        $sessionDataString = json_encode($sessionData);

        $resultUpdate = $wpdb->update($tableName, ['data' => $sessionDataString], [
            'id' => $result->id
        ]);

        return $resultUpdate;
    }

    

    public function get(string $key){
        global $wpdb;

        $token = Session::getCookieAuth();

        $tableName = Session::$tableName;

        $result = $wpdb->get_row( "SELECT * FROM $tableName WHERE `token` = '$token'" );

        if(!$result){
            return false;
        }

        $dataArray = json_decode($result->data, true);

        return isset($dataArray[$key]) ? $dataArray[$key] : false;
    }

    public function remove(string $key){
        global $wpdb;

        $token = Session::getCookieAuth();

        $tableName = Session::$tableName;

        $result = $wpdb->get_row( "SELECT * FROM $tableName WHERE `token` = '$token'" );

        if(!$result){
            return false;
        }

        $dataArray = json_decode($result->data, true);

        unset($dataArray[$key]);

        $sessionDataString = json_encode($dataArray);

        $resultUpdate = $wpdb->update($tableName, ['data' => $sessionDataString], [
            'id' => $result->id
        ]);

        return $resultUpdate;
    }


}