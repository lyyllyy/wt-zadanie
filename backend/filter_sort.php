<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "webove";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$nameFilter = isset($_GET['name']) ? "%" . $_GET['name'] . "%" : "%";
$countryFilter = isset($_GET['country']) ? "%" . $_GET['country'] . "%" : "%";
$emailFilter = isset($_GET['email']) ? "%" . $_GET['email'] . "%" : "%";
$birthYearFilter = isset($_GET['birth_year']) ? $_GET['birth_year'] : "%";

$sortColumn = isset($_GET['sort']) ? $_GET['sort'] : 'id';
$sortOrder = isset($_GET['order']) && in_array(strtoupper($_GET['order']), ['ASC', 'DESC']) ? strtoupper($_GET['order']) : 'ASC';

$sql = "SELECT * FROM users WHERE name LIKE ? AND country LIKE ? AND email LIKE ? AND birth_year LIKE ? ORDER BY $sortColumn $sortOrder";

$stmt = $conn->prepare($sql);
$stmt->bind_param("ssss", $nameFilter, $countryFilter, $emailFilter, $birthYearFilter);
$stmt->execute();

$result = $stmt->get_result();

$users = [];
while ($row = $result->fetch_assoc()) {
    $users[] = $row;
}

echo json_encode($users);

$stmt->close();
$conn->close();
?>
