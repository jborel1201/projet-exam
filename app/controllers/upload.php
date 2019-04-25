<?php
require 'routing.php';
require_once MODELS_PATH . 'config/mongo-config.php';
require_once DAOS_PATH . 'UploadDao.php';

$collection = defineCollection('upload');

$method = $_SERVER['REQUEST_METHOD'];
try {
    switch ($method) {
        case "GET":
            $result = UploadDao::select($collection);
            break;
        case "POST":
            $datas = json_decode(file_get_contents('php://input'));
            $result = UploadDao::insert($datas, $collection);
            break;
        case "DELETE":
            $paramId = filter_input(INPUT_GET, 'id', FILTER_SANITIZE_STRING);
            $result = UploadDao::delete($paramId, $collection);
            break;
        case "PUT":
            $paramId = filter_input(INPUT_GET, 'id', FILTER_SANITIZE_STRING);
            $datas = json_decode(file_get_contents('php://input'));
            $result = UploadDao::update($datas, $paramId, $collection);
            break;
   }
} catch (MongoDB\Driver\Exception\ConnectionException $e) {

    $result = $e->getMessage();
    header("HTTP/1.1 500 Internal Server Error");
} 

echo ($result);

