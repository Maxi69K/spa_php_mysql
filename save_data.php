<?php 
require 'bootstrap.php';

$json = file_get_contents('php://input'); // if it does not reach us through form

$data = json_decode($json);

//var_dump($data); // from class DB func save

echo $query->save($data);