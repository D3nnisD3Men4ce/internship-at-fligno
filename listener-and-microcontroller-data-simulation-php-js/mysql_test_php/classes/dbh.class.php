<?php

class Dbh
{
    private $host = "localhost";
    private $user = "root";
    private $pwd = "jkpb5299";
    private $dbName = "plantmockdata";

    protected function connect()
    {
        try {
            $dsn = 'mysql:host=' . $this->host . ';dbName=' . $this->dbName;
            $pdo = new PDO($dsn, $this->user, $this->pwd);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $pdo;
        } catch (PDOException $e) {
            echo "Connection failed: " . $e->getMessage();
        }
    }
}