<?php
require 'routing.php';
require_once MODELS_PATH . 'config/mongo-config.php';
require_once DAOS_PATH . 'GalleryDao.php';

$method = $_SERVER['REQUEST_METHOD'];
$collection = defineCollection('gallery');

try {

    switch ($method) {
        case "GET":
            $result = GalleryDao::select($collection);
            break;
        case "POST":
            $datas = json_decode(file_get_contents('php://input'));
            $result = GalleryDao::insert($datas, $collection);
            break;
    }
} catch (MongoDB\Driver\Exception\ConnectionException $e) {

    $result = 'Probleme de connexion avec la base de donnée';
}

echo ($result);
