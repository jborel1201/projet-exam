<?php
require '../../vendor/autoload.php';
include '../entities/File.php';

/*$data = json_decode(file_get_contents('php://input'));

//var_dump($_POST['data']);

//$name = filter_input(INPUT_POST,'name', FILTER_SANITIZE_STRING);


$table = [];
foreach ($data as $item) {
  $data = new File();
  $data
    ->setName($item->name)
    ->setType($item->type)
    ->setSize($item->size);

array_push($table,$data->responseFormat());

}

echo (json_encode($table));*/


$collection = (new MongoDB\Client)->gallery->upload;
$method = $_SERVER['REQUEST_METHOD'];
/*$param = json_decode(file_get_contents('php://input'));

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


    $insert = $collection->insertOne([
        'comment' => $comment,
        'datas' => json_encode($arrayFiles)
    ]);

    return $insert->getInsertedCount();
}

$result = insert($param,$collection);

echo($result);*/
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

