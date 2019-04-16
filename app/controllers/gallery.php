<?php
require 'routing.php';
require_once MODELS_PATH . 'config/mongo-config.php';
require_once DAOS_PATH . 'GalleryDao.php';

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case "GET":   
        $result = GalleryDao::select($collectionUpload);
        break;
    case "POST":
        $datas = json_decode(file_get_contents('php://input'));
        $result = GalleryDao::insert($datas, $collectionUpload);
        break;

}

echo ($result);
