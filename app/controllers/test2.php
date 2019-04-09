<?php

$data = json_decode(file_get_contents('php://input'));

//var_dump($_POST['data']);

//$name = filter_input(INPUT_POST,'name', FILTER_SANITIZE_STRING);



/*foreach ($data as $item) {
    var_dump($item->name);
    $itemPhp = [
    "name" => filter_var($item->name, FILTER_SANITIZE_STRING),
    "type" => filter_var($item->type, FILTER_SANITIZE_STRING),
    ];

    var_dump($itemPhp);


}*/
var_dump($_SERVER['REQUEST_METHOD']);
var_dump($data)

?>

