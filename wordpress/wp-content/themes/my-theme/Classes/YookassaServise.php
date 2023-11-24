<?php

namespace App\Classes;

use YooKassa\Client;

class YookassaServise{

   private static YookassaServise $instance;

   private $client;

    public function __construct(){
        if(isset($instance)){
            return $instance;
        }



        // var_dump(SHOP_ID);
        $client = new Client();
	    $client->setAuth(SHOP_ID, SHOP_KEY);
        $this->client = $client;
    }

    public function create_payment($amount, $description = 'Заказ №1'){
        $payment = $this->client->createPayment(
            array(
                'amount' => array(
                    'value' => $amount,
                    'currency' => 'RUB',
                ),
                'confirmation' => array(
                    'type' => 'redirect',
                    'return_url' => 'http://localhost:8080/katalog',
                ),
                'capture' => true,
                'description' => 'Hefd',
            ),
            uniqid('', true)
        );
        
        return $payment;
    }

    public function getInfo(string $id){
        return $this->client->getPaymentInfo($id);
    }
}