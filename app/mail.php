<?php
$recepient = "romanlevunets@gmail.com";
$sitename = "Нефтегазовое оборудование";
$method = $_SERVER['REQUEST_METHOD'];
//Script Foreach
$c = true;
if ( $method === 'POST' ) {
    $project_name = trim($_POST["user_name"]);
    $admin_email  = trim($_POST["user_phone"]);
    foreach ( $_POST as $key => $value ) {
        $message .= "
    " . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
      <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
      <td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
    </tr>  ";
    }
} else if ( $method === 'GET' ) {
    $project_name = trim($_GET["user_name"]);
    $admin_email  = trim($_GET["user_phone"]);
    foreach ( $_GET as $key => $value ) {
        if ( $value != "" && $key != "user_name" && $key != "user_phone") {
            $message .= "
      " . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
        <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
        <td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
      </tr>
      ";
        }
    }
}
$message = "<table style='width: 100%;'>$message</table>";
$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "From: $recepient" . "\r\n" . "Reply-To: $admin_email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");