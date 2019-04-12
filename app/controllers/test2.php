<?php
require '../../vendor/autoload.php';
include '../model/entities/File.php';

//$data = json_decode(file_get_contents('php://input'));

//var_dump($_POST['data']);

//$name = filter_input(INPUT_POST,'name', FILTER_SANITIZE_STRING);
//echo(json_encode($data))

/*$table = [];
foreach ($data->files as $item) {
  $datat = new File();
  $datat
    ->setName($item->name)
    ->setType($item->type)
    ->setSize($item->size);

array_push($table,$datat->responseFormat());

}

echo (json_encode($table));*/


$collection = (new MongoDB\Client)->gallery->upload;
$method = $_SERVER['REQUEST_METHOD'];
$param = json_decode(file_get_contents('php://input'));
//var_dump($param->object);

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

    $date = new DateTime();
    $insert = $collection->insertOne([        
        'comment' => $comment,
        'date' => $date->format('d-m-Y H:i:s'),
        'datas' => $arrayFiles
    ]);

    return $insert->getInsertedCount();
}

$result = insert($param,$collection);

echo($result);


function select($collection){
    $cursor = $collection->find();

    $arrayResult = [];
    foreach($cursor as $document){
        $arrayItem = [
            'id'=>$document['_id'],
            'comment'=>$document['comment'],
            'datas'=>$document['datas']
        ];
        array_push($arrayResult, $arrayItem);
    }

    return(json_encode($arrayResult));
}

echo(select($collection));



?>



