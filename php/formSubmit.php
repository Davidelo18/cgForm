<?php
$name = $_POST['name'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];
$tel = $_POST['tel'];

if(isset($name) && isset($lastname) && isset($email) && isset($tel)) {
    $mailTo = 'marketing@copygeneral.pl, zaneta.szewczuk@copygeneral.pl';
    $subject = "Rejestracja do programu lojalnościowego";
    $message = 'Zarejestrowano'; // UZUPEŁNIĆ

    if (mail($mailTo, $subject, $message)) {
        echo "Dziękujemy za rejestracje do programu rabatowego Copy General. Skontaktujemy się Panem/Panią w najbliższym czasie.";
        echo "Zespół Copy General.";
    } else {
        echo "Nastąpił błąd podczas wysyłaniu formularza. Prosimy spróbować później.";
        echo "Zespół Copy General";
    }
}
