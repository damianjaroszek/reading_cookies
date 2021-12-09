<?php

    setcookie('session', md5(rand()), time() + 60 * 60 * 24 * 30, '/');

?>
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Przykład 26 - Odczytywanie ciasteczek</title>
</head>
<body>

    <h1>Przykład 26 - Odczytywanie ciasteczek</h1>

<script src="js/scripts.js"></script>
</body>
</html>
