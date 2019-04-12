<?php
require '../../vendor/autoload.php';
include '../entities/File.php';
$collection = (new MongoDB\Client)->gallery->upload;
$method = $_SERVER['REQUEST_METHOD'];
$param = json_decode(file_get_contents('php://input'));


function insert($param, $collection)
{
    //récupération et traitement du commentaire
    $comment = filter_var($param->comment, FILTER_SANITIZE_STRING);
    // Récupération et traitement des fichiers
    $arrayFiles = [];
    foreach ($param->files as $file) {
        $data = new File();
        $data
            ->setName($file->name)
            ->setType($file->type)
            ->setSize($file->size)
            ->setSrc($file->src);
        array_push($arrayFiles, $data->responseFormat());
    }

    $date = new DateTime();
    $insert = $collection->insertOne([
        'comment' => $comment,
        'date' => $date->format('d-m-Y H:i:s'),
        'datas' => $arrayFiles
    ]);

    $result = $insert->getInsertedCount();
    echo($result);
}


function select($collection)
{
    $cursor = $collection->find();

    $arrayResult = [];
    foreach ($cursor as $document) {
        $arrayItem = [
            'id' => $document['_id'],
            'date' => $document['date'],
            'comment' => $document['comment'],
            'datas' => $document['datas']
        ];
        array_push($arrayResult, $arrayItem);
    }

    echo (json_encode($arrayResult));
}


switch ($method) {
    case "GET":
        select($collection);
        break;
    case "POST":
        insert($param, $collection);
        break;
}
//select($collection);
/*$paramId = filter_input($_GET, 'id', FILTER_SANITIZE_STRING);
function deleteOne($paramId, $collection)
{

    $delete = $collection->deleteOne(['_id' => new MongoDB\BSON\ObjectId($paramId)]);

    return $delete->getDeletedCount();
}*/
