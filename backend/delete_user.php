<?php
// Allow CORS for React frontend
header("Access-Control-Allow-Origin: http://localhost:3001");
header("Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=UTF-8");

// Database credentials
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "webove";

// Connect to the database
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}

// Get user ID from the query parameter
$user_id = isset($_GET['id']) ? $_GET['id'] : null;

if ($user_id) {
    // SQL query to delete the user from the database
    $sql = "DELETE FROM users WHERE id = ?";
    
    // Prepare statement
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $user_id);  // "i" means integer
    $stmt->execute();

    // Check if the deletion was successful
    if ($stmt->affected_rows > 0) {
        echo json_encode(["success" => "User deleted successfully"]);
    } else {
        echo json_encode(["error" => "User not found or already deleted"]);
    }
    
    // Close the statement
    $stmt->close();
} else {
    echo json_encode(["error" => "No user ID provided"]);
}

// Close the database connection
$conn->close();
?>
