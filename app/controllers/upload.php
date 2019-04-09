<?php

$collection = (new MongoDB\Client)->gallery->upload;
$method = $_SERVER['REQUEST_METHOD'];
$param = json_decode(file_get_contents('php://input'));

function insert($param){

    $comment = filter_var($param->comment,FILTER_SANITIZE_STRING);

}

?>