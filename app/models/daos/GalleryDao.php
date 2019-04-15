<?php

require_once ENTITIES_PATH . 'FileGallery.php';
require_once ENTITIES_PATH . 'DocumentUpload.php';

class UploadDao
{

    public static function select($collection)
    {
        $cursor = $collection->find();

        $arrayResult = [];
        foreach ($cursor as $document) {
            $object = new DocumentUpload();
            $object
                ->setId($document['_id'])
                ->setComment($document['comment'])
                ->setDateUpload($document['dateUpload'])
                ->setDatas($document['datas']);

            array_push($arrayResult, $object->selectedDocToArray());
        }

        return json_encode($arrayResult);
    }


    public static function insert($param, $collection)
    {
        $comment = filter_var($param->comment, FILTER_SANITIZE_STRING);

        //création d'un array d'objet php 
        $arrayFiles = [];
        $date = new DateTime();
        $dateUpload = $date->format('d-m-Y H:i:s');
        foreach ($param->files as $file) {
            $data = new FileUpload();
            $data
                ->setName($file->name)
                ->setType($file->type)
                ->setSize($file->size)
                ->setSrc($file->src)
                ->setDateUpload($dateUpload);
            array_push($arrayFiles, $data->fileUploadToArray());
        }

        //création d'un object collection à inserer dans mongo
        $object = new DocumentUpload();
        $object
            ->setComment($comment)
            ->setDatas($arrayFiles)
            ->setDateUpload($dateUpload);

        $insert = $collection->insertOne($object->docUploadToArray());

        return $insert->getInsertedCount();
    }

    public static function update($param, $paramId, $collection)
    {

        $arrayFiles = [];
        foreach ($param->files as $file) {
            $data = new FileUpload();
            $data
                ->setName($file->name)
                ->setType($file->type)
                ->setSize($file->size)
                ->setSrc($file->src)
                ->setDateUpload($file->dateUpload);
            array_push($arrayFiles, $data->fileUploadToArray());
        }

        $update = $collection->updateOne(
            ['_id' => new MongoDB\BSON\ObjectId($paramId)],
            ['$set' => ['datas' => $arrayFiles]]
        );

        return $update->getModifiedCount();
    }

    public static function delete($paramId, $collection)
    {

        $delete = $collection->deleteOne(['_id' => new MongoDB\BSON\ObjectId($paramId)]);

        return $delete->getDeletedCount();
    }
}//class
