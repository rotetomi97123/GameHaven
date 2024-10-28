<?php
include 'site.php'; // This includes your database connection
// Allow from any origin
header("Access-Control-Allow-Origin: *");

// Allow specific HTTP methods
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

// Allow specific headers
header("Access-Control-Allow-Headers: Content-Type, Authorization");
// Get the input data from the request
$data = json_decode(file_get_contents('php://input'), true);
$username = $data['username'];
$password = password_hash($data['password'], PASSWORD_DEFAULT); // Hash the password

// Prepare and execute the insert query
$query = "INSERT INTO users (username, password) VALUES (?, ?)";
$stmt = $conn->prepare($query);
$stmt->bind_param("ss", $username, $password);

if ($stmt->execute()) {
    echo json_encode(["status" => "success"]);
} else {
    echo json_encode(["status" => "error", "message" => "Registration failed"]);
}
?>
