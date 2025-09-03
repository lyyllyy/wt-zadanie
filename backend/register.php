<?php
header("Access-Control-Allow-Origin: http://localhost:3001");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Pripojenie k databáze
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "webove";

$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = trim($_POST['name']);
    $birth_year = intval($_POST['birth_year']);
    $country = trim($_POST['country']);
    $email = trim($_POST['email']);
    $phone = isset($_POST['phone']) ? trim($_POST['phone']) : null;
    $note = isset($_POST['note']) ? trim($_POST['note']) : null;

   
    if (strlen($name) < 3 || !preg_match("/^[a-zA-Z ]+$/", $name)) {
        die("Invalid name. Name must be at least 3 characters long and only contain letters and spaces.");
    }

   
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Invalid email format.");
    }

    
    if (!is_numeric($birth_year) || $birth_year < 1900 || $birth_year > date("Y")) {
        die("Invalid birth year. Please enter a valid year between 1900 and the current year.");
    }

    
    if (strlen($country) < 3) {
        die("Invalid country. Country name must be at least 3 characters long.");
    }

    
    if ($phone && !preg_match("/^\+421\d{9}$/", $phone)) {
        die("Invalid phone number. Phone number must start with '+421' and contain exactly 9 digits.");
    }

    
    if (empty($note)) {
        die("Note cannot be empty.");
    }

    // Pripravený dotaz
    $stmt = $conn->prepare("INSERT INTO users (name, birth_year, country, email, phone, note) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sissss", $name, $birth_year, $country, $email, $phone, $note);

    if ($stmt->execute()) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
}

$conn->close();
?>
