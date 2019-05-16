<?php

require_once ENTITIES_PATH . 'FileUpload.php';
require_once ENTITIES_PATH . 'DocumentUpload.php';

class UploadDao
{

    public static function select($collection)
    {
        $arrayResult = [];

        $cursor = $collection->find();

        foreach ($cursor as $document) {
            $object = new DocumentUpload();
            $object
                ->setId($document['_id'])
                ->setDateUpload($document['dateUpload'])
                ->setData($document['data']);

            array_push($arrayResult, $object->selectedDocToArray());
        }

        return json_encode($arrayResult);
    }


    public static function insert($param, $collection)
    {

        //création d'un array d'objet php 
        $arrayFiles = [];
        $date = new DateTime();
        $dateUpload = $date->format('d-m-Y H:i:s');
        foreach ($param as $file) {
            /*$base64string = $file->src;
            file_put_contents('img.jpeg', base64_decode(explode(',',$base64string)[1]));*/
            $testDoubleExtension = explode('.', $file->name);
            if (preg_match("/\b(\.jpg|\.JPG|\.png|\.PNG|\.gif|\.GIF)\b/", $file->name) == 1 && count($testDoubleExtension) == 2) {

                $data = new FileUpload();
                $data
                    ->setName($file->name)
                    ->setType($file->type)
                    ->setSize($file->size)
                    ->setSrc($file->src)
                    ->setComment($file->comment)
                    ->setDateUpload($dateUpload);



                array_push($arrayFiles, $data->fileUploadToArray());
            }
        }

        //création d'un object collection à inserer dans mongo
        $object = new DocumentUpload();
        $object
            ->setData($arrayFiles)
            ->setDateUpload($dateUpload);

        $insert = $collection->insertOne($object->docUploadToArray());

        return $insert->getInsertedCount();
    }

    public static function update($param, $paramId, $collection)
    {

        $arrayFiles = [];
        foreach ($param as $file) {
            $data = new FileUpload();
            $data
                ->setName($file->name)
                ->setType($file->type)
                ->setSize($file->size)
                ->setSrc($file->src)
                ->setComment($file->comment)
                ->setDateUpload($file->dateUpload);
            array_push($arrayFiles, $data->fileUploadToArray());
        }

        $update = $collection->updateOne(
            ['_id' => new MongoDB\BSON\ObjectId($paramId)],
            ['$set' => ['data' => $arrayFiles]]
        );

        return $update->getModifiedCount();
    }

    public static function delete($paramId, $collection)
    {

        $delete = $collection->deleteOne(['_id' => new MongoDB\BSON\ObjectId($paramId)]);

        return $delete->getDeletedCount();
    }


}//class
