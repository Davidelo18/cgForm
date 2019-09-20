<?php
$name = $_POST['name'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];
$tel = $_POST['tel'];

if(isset($name) && isset($lastname) && isset($email) && isset($tel)) {
    $mailTo = 'dawiolo002@gmail.com';
    $subject = "Rejestracja do programu lojalnościowego";
    $message = 'Zarejestrowano'; // UZUPEŁNIĆ

    if (mail($mailTo, $subject, $message)) {
        echo "Formularz został wysłany. Skontaktujemy się w najbliższym czasie.";
    } else {
        echo "Błąd przy wysyłaniu formularza. Spróbuj ponownie później";
    }
}
