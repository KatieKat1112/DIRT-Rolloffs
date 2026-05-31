<?php
$host = "localhost";
$db   = "if0_42058581_XXX";          // your database name
$user = "if0_42058581";      // the MySQL user you created
$pass = "isKHVsrcFVRVb";      // that user's password

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db;charset=utf8mb4", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Database connection failed: " . $e->getMessage());
}
