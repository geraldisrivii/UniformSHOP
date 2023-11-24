<?php

namespace App\Classes;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;


class MailServise{
    private array $mail_settings = MAIL_SETTINGS['mail_settings_dev'];
    
    private $client;
    
    public function __construct(){
        $this->init();
    }
    
    private function init(){
        
        $mail = new PHPMailer(true);
        
        $mail->SMTPDebug = 0;                      
		$mail->isSMTP();                                          
		$mail->Host       = $this->mail_settings['host'];                    
		$mail->SMTPAuth   = $this->mail_settings['auth'];                                  
		$mail->Username   = $this->mail_settings['username'];                  
		$mail->Password   = $this->mail_settings['password'];                               
		$mail->SMTPSecure = $this->mail_settings['secure'];         
		$mail->Port = $this->mail_settings['port'];             
		
		$mail->isHTML($this->mail_settings['is_html']);      
        
        $this->client = $mail;
    }

    public function send($subject, $body, $to, $altBody = null){

        $this->client->addAddress($to);
        $this->client->Subject = $subject;
		$this->client->Body    = $body;
        if($altBody){
            $this->client->AltBody = $altBody;
        }
        

        $this->client->send();
    }

}