<?php
if((isset($_POST['user_name'])&&$_POST['user_name']!="")&&(isset($_POST['user_phone'])&&$_POST['user_phone']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
    $to = 'romanlevunets@fmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
    $subject = 'НЕФТЕГАЗОВОЕ ОБОРУДОВАНИЕ'; //Загаловок сообщения
    $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>

                        <p>Имя: '.$_POST['user_name'].'</p>
                        <p>E-mail: '.$_POST['user_phone'].'</p>
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
    $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
    $headers .= "From: НЕФТЕГАЗОВОЕ ОБОРУДОВАНИЕ \r\n"; //Наименование и почта отправителя
    mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}