<?php
include '../../entities/File.php';

$collection = (new MongoDB\Client)->gallery->upload;
$method = $_SERVER['REQUEST_METHOD'];
$param = json_decode(file_get_contents('php://input'));


function insert($param,$collection)
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


    $insert = $collection->insertOneResult([
        'comment' => $comment,
        'datas' => json_encode($arrayFiles)
    ]);

    return $insert->getInsertedCount();
}


function select($collection){
    $cursor = $collection->find();

    $arrayResult = [];
    foreach($cursor as $document){
        array_push($arrayResult,$document);
    }

    return(json_encode($arrayResult));
}
