<?php
require_once "../config/database.php";
require_once "../src/models/User/User.php";

$db = new Database();
$conn = $db->getConnection();

$user = new User($conn);
$stmt = $user->getUsers();

while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    extract($row);
    echo "Nombre: $Nombre_Usu, Apellido: $Apellido_Usu<br>";
}
?>
