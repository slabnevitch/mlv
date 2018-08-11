<?php

$frm_name  = "Youname";
$recepient = "email@email.ru";
$sitename  = "Завод анодирования";
$subject   = "Новая заявка с сайта \"$sitename\"";

$material = trim($_POST["material"]);
$value = trim($_POST["value"]);
$type = trim($_POST["type"]);

$message = "

Имя: $name <br>
Телефон: $phone <br> 
Объем: $value <br>
Тип: $type <br>
Материал: $material <br>
";

mail($recepient, $subject, $message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
