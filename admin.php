<?php
$host = "sql103.infinityfree.com"; 
$db   = "if0_42058581_dirt_rolloffs";
$user = "if0_42058581";
$pass = "isKHVsrcFVRVb";

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db;charset=utf8mb4", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Database connection failed: " . $e->getMessage());
}
