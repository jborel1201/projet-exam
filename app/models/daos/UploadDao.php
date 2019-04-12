<?php

require_once ENTITIES_PATH.'FileUpload.php';
require_once ENTITIES_PATH.'UploadMongoDoc.php';

class UploadDao
{

    public static function select($collection)
    {
        $cursor = $collection->find();
    
        $arrayResult = [];
        foreach ($cursor as $document) {
            $object = new UploadMongoDoc();
            $object
            ->setId($document['_id'])
            ->setComment($document['comment'])
            ->setDatas($document['datas']);
          
            array_push($arrayResult, $object->selectedDocToArray());
        }
    
        return json_encode($arrayResult);
    }


    public static function insert($param, $collection)
{   
    $comment = filter_var($param->comment, FILTER_SANITIZE_STRING);
    
    $arrayFiles = [];
    foreach ($param->files as $file) {
        $data = new FileUpload();
        $data
            ->setName($file->name)
            ->setType($file->type)
            ->setSize($file->size)
            ->setSrc($file->src);
        array_push($arrayFiles, $data->fileUploadToArray());
    }

    $object = new UploadMongoDoc();
    $object   
    ->setComment($comment)
    ->setDatas($arrayFiles);
    
    $insert = $collection->insertOne($object->docUploadToArray());

    return $insert->getInsertedCount();
}

public static function deleteOne($paramId, $collection)
{

    $delete = $collection->deleteOne(['_id' => new MongoDB\BSON\ObjectId($paramId)]);

    return $delete->getDeletedCount();
}

}//class
