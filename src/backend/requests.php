<?php
require "config.php";
require "auth.php";

$user = checkAuth();

$method = $_SERVER["REQUEST_METHOD"];

if ($method === "GET") {
    $stmt = $pdo->query("SELECT * FROM requests ORDER BY created_at DESC");
    $requests = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($requests);
} elseif ($method === "POST") {
    $input = json_decode(file_get_contents("php://input"), true);
    if (!isset($input["name"], $input["email"], $input["message"])) {
        http_response_code(400);
        echo json_encode(["error" => "Missing fields"]);
        exit;
    }

    $stmt = $pdo->prepare("INSERT INTO requests (name, email, message) VALUES (?, ?, ?)");
    $stmt->execute([$input["name"], $input["email"], $input["message"]]);

    echo json_encode(["success" => true]);
} elseif ($method === "DELETE") {
    $id = $_GET["id"] ?? null;
    if (!$id) {
        http_response_code(400);
        echo json_encode(["error" => "Missing id"]);
        exit;
    }

    $stmt = $pdo->prepare("DELETE FROM requests WHERE id = ?");
    $stmt->execute([$id]);

    echo json_encode(["success" => true]);
}

?>