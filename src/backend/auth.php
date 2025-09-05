<?php
require "vendor/autoload.php";

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

function checkAuth() {
    $headers = apache_request_headers();
    if (!isset($headers["Authorization"])) {
        http_response_code(401);
        echo json_encode(["error" => "Missing token"]);
        exit;
    }

    $token = str_replace("Bearer ", "", $headers["Authorization"]);
    $key = "my_secret_key";

    try {
        $decoded = JWT::decode($token, new Key($key, 'HS256'));
        return $decoded;
    } catch (Exception $e) {
        http_response_code(401);
        echo json_encode(["error" => "Invalid token"]);
        exit;
    }
}

?>