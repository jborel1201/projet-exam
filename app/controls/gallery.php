<?php
require_once 'config/routing.php';
require_once 'config/mongo-config.php';
require_once DAOS_PATH . 'GalleryDao.php';

$method = $_SERVER['REQUEST_METHOD'];
$collection = defineCollection('gallery');

try {

    switch ($method) {
        case "GET":
            $result = GalleryDao::select($collection);
            break;
        case "POST":
            $data = json_decode(file_get_contents('php://input'));
            $result = GalleryDao::insert($data, $collection);
            break;
    }
} catch (MongoDB\Driver\Exception\ConnectionException $e) {

    $result = $e;
    header("HTTP/1.1 500 Internal Server Error");
}

echo ($result);
