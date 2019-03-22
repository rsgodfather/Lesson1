<?php
$errors = [];

if (empty($_POST['email'])) {
    $errors['email'] = 'Enter email';
} else {
    $email = filter_var($_POST('email'), FILTER_VALIDATE_EMAIL);
    if ($email === false) {
        $errors['email'] = 'Invalid email';
    }
}
if (empty($_POST['password'])) {
    $errors['password'] = 'Enter password';
}
if (empty($_POST['PasswordConfirmation'])) {
    $errors['PasswordConfirmation'] = 'Enter cnfirmation of password';
}
elseif($_POST['passwod'] != $_POST ['PasswordConfirmation']){
        $errors['PasswordConfirmation'] = 'Confirmation of password is invalid';
}
if ($errors){
    include 'index.php';
    exit();
}

$file = fopen('users.txt','a');
$line = $_POST['email'] . "\t" . $_POST['password'] . "\n";
fputs($file, $line);
fclose($file);

header('Loction: thanks.html');