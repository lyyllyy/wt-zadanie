<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: DELETE");
header("Access-Control-Allow-Headers: Content-Type");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "webove";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "DELETE") {
    $id = isset($_GET['id']) ? intval($_GET['id']) : 0;

    if ($id > 0) {
        $checkStmt = $conn->prepare("SELECT id, status FROM users WHERE id = ?");
        $checkStmt->bind_param("i", $id);
        $checkStmt->execute();
        $checkStmt->store_result();

        if ($checkStmt->num_rows > 0) {
            $checkStmt->bind_result($recordId, $status);
            $checkStmt->fetch();

            if ($status === 'nepotrebné' || $status === 'dokončené') {
                $deleteStmt = $conn->prepare("DELETE FROM users WHERE id = ?");
                $deleteStmt->bind_param("i", $id);

                if ($deleteStmt->execute()) {
                    echo json_encode(["status" => "success", "message" => "Record deleted successfully."]);
                } else {
                    echo json_encode(["status" => "error", "message" => "Failed to delete the record."]);
                }

                $deleteStmt->close();
            } else {
                echo json_encode(["status" => "error", "message" => "Record is not marked as 'nepotrebné' or 'dokončené'."]);
            }
        } else {
            echo json_encode(["status" => "error", "message" => "Record with ID $id does not exist."]);
        }

        $checkStmt->close();
    } else {
        echo json_encode(["status" => "error", "message" => "Invalid ID."]);
    }
}

$conn->close();
?>
