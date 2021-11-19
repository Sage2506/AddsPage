<?php
/** 8:08
 * @class Sender
 * This is used to send email via react contact from component
 */
class Sender
{
    public $sendTo;
    public $sendFrom;
    public $subject;
    public $message;
    public $headers;
    public $error = [];

    public function __construct($sendTo, $sendFrom = null, $subject, $message)
    {
        $this->sendTo = $sendTo;
        $this->sendFrom = ($sendFrom) ? $sendFrom : 'impactov@matra.websitewelcome.com';
        $this->subject = $subject;
        $this->message = $message;
    }

    public function setTo($email, $name) {
        return $this->sendTo = $email;
    }

    public function getTo() {
        return $this->sendTo;
    }

    public function setFrom($email, $name)  {
        return $this->sendFrom = $email;
    }

    public function setSubject($subject) {
        return $this->subject = $subject;
    }

    public function getSubject() {
        return $this->subject;
    }

    public function setMessage($message) {
        $this->message = $message;
        return $this;
    }

    public function getMessage() {
        return $this->message;
    }

    public function setHeader() {
        $headers = 'From: '.$this->getFrom() . "\r\n" .
            'Reply-To: '.$this->getFrom() . "\r\n" .
            'X-Mailer: PHP/' . phpversion();

        $this->headers = $headers;
        return $this;
    }

    public function getFrom() {
        return $this->sendFrom;
    }

    public function send() {
        $to = $this->sendTo;
        $from = $this->sendFrom;
        $subject = $this->subject;
        $message = $this->message;
        //$headers = $this->headers;
        $headers = 'From: '.$this->getFrom() . "\r\n" .
        'Reply-To: '.$this->getFrom() . "\r\n" .
        'X-Mailer: PHP/' . phpversion() . "\r\n" .
        'MIME-Version: 1.0' . "\r\n".
        'Content-type:text/html;charset=UTF-8';
        $mail_result = mail($to, $subject, $message, $headers);
        $response = array( 'sent'=>$mail_result , 'from'=>$this->sendFrom, 'message'=>$this->message );
        echo json_encode($response);
    }
}