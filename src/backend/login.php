<?php
require "config.php";
require "vendor/autoload.php";

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$input = json_decode(file_get_contents("php://input"), true);

if (!isset($input["username"], $input["password"])) {
    http_response_code(400);
    echo json_encode(["error" => "Missing username or password"]);
    exit;
}

$stmt = $pdo->prepare("SELECT * FROM admins WHERE username = ?");
$stmt->execute([$input["username"]]);
$admin = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$admin || !password_verify($input["password"], $admin["password"])) {
    http_response_code(401);
    echo json_encode(["error" => "Invalid credentials"]);
    exit;
}

$key = "my_secret_key";
$payload = [
    "id" => $admin["id"],
    "username" => $admin["username"],
    "exp" => time() + 3600
];

$jwt = JWT::encode($payload, $key, 'HS256');

echo json_encode(["token" => $jwt]);

?>