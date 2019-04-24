<?php

require_once ENTITIES_PATH . 'FileGallery.php';

class GalleryDao
{

    public static function select($collection)
    {
       
            $cursor = $collection->find();

            $arrayResult = [];
            foreach ($cursor as $document) {
                $data = new FileGallery();
                $data
                    ->setId($document->id)
                    ->setName($document->name)
                    ->setType($document->type)
                    ->setSize($document->size)
                    ->setSrc($document->src)
                    ->setDateUpload($document->dateUpload)
                    ->setDateValidation($document->dateValidation)
                    ->setComment($document->comment);

                array_push($arrayResult, $data->selectedDocToArray());
            }

            return json_encode($arrayResult);
       
    }


    public static function insert($param, $collection)
    {

        $date = new DateTime();
        $dateValidation = $date->format('d-m-Y H:i:s');

        $data = new FileGallery();
        $data
            ->setName($param->name)
            ->setType($param->type)
            ->setSize($param->size)
            ->setSrc($param->src)
            ->setDateUpload($param->dateUpload)
            ->setComment($param->comment)
            ->setDateValidation($dateValidation);

        $insert = $collection->insertOne($data->fileGalleryToArray());

        return $insert->getInsertedCount();
    }
}//class
