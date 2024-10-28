<?php
include 'site.php'; // Include your database connection
// Allow from any origin
header("Access-Control-Allow-Origin: *");

// Allow specific HTTP methods
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

// Allow specific headers
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$data = json_decode(file_get_contents('php://input'), true);
$username = $data['username'];
$password = $data['password'];

$query = "SELECT * FROM users WHERE username = ?";
$stmt = $conn->prepare($query);
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();
$user = $result->fetch_assoc();

if ($user && password_verify($password, $user['password'])) {
    echo json_encode(["status" => "success", "userId" => $user['id']]);
} else {
    echo json_encode(["status" => "error", "message" => "Login failed"]);
}
?>
