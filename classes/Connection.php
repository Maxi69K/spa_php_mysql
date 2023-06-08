<?php
class Connection
{
    public static function Connect($database)
    {
        try {
            return new PDO('mysql:host=' . $database['host'] . ';dbname=' . $database['dbname'] . ';', $database['user'], $database['password']);
        } catch (PDOException $e) {
            die($error_message = "Error ".$e->getMessage());
        }
    }
}