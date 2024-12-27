<?php
class User {
    private $conn;
    private $table_name = "Usuarios";

    public function __construct($db) {
        $this->conn = $db;
    }

    public function getUsers() {
        $query = "SELECT * FROM " . $this->table_name;
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }
}
?>
