<?php ?>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>PHP</title>
    <link rel="stylesheet" href="main.css">
</head>
<body>
    <form method="post" action="action.php">
        <div class="row">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" value="<?= !empty($_POST['email']) ? $_POST['eamil'] : '' ?>">
            <?= empty($errors['email']) ? $errors['email'] : '' ?>
        </div>
        <div class="row">
            <label for="password">Pa$$word</label>
            <input type="password" name="password" id="password">
            <?= empty($errors['password']) ? $errors['password'] : '' ?>
        </div>
        <div class="row">
            <label for="PasswordConfirmation">Confirm you Pa$$word</label>
            <input type="password" name="PasswordConfirmation" id="PasswordConfirmation">
            <?= empty($errors['PasswordConfirmation']) ? $errors['PasswordConfirmation'] : '' ?>
        </div>
        <button>Register onself</button>
    </form>
</body>
</html>
