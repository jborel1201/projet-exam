<?php
require 'routing.php';
require_once MODELS_PATH . 'config/mongo-config.php';
require_once DAOS_PATH . 'UploadDao.php';

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case "GET":   
        $result = UploadDao::select($collectionUpload);
        break;
    case "POST":
        $datas = json_decode(file_get_contents('php://input'));
        $result = UploadDao::insert($datas, $collectionUpload);
        break;
    case "DELETE":
        $paramId = filter_input(INPUT_GET, 'id', FILTER_SANITIZE_STRING);
        $result = UploadDao::delete($paramId, $collectionUpload);
        break;
    case "PUT":
        $paramId = filter_input(INPUT_GET, 'id', FILTER_SANITIZE_STRING);
        $datas = json_decode(file_get_contents('php://input'));
        $result = UploadDao::update($datas, $paramId, $collectionUpload);
        break;
}

echo ($result);
