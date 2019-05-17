<?php

require 'AbstractFile.php';
require_once 'iToArray.php';

class FileGallery extends AbstractFile implements iToArray
{
    private $id;
    private $dateValidation;

    public function getId()
    {
        return $this->id;
    }

    public function setId($id)
    {
        $this->id = $id;
        return $this;
    }
    public function getDateValidation()
    {
        return $this->dateValidation;
    }

    public function setDateValidation($dateValidation)
    {
        $this->dateValidation = $dateValidation;
        return $this;
    }

    public function toArray()
    {
        $array = array(
            'name' => $this->name,
            'type' => $this->type,
            'size' => $this->size,
            'src' => $this->src,
            'dateUpload' => $this->dateUpload,
            'dateValidation' => $this->dateValidation,
            'comment' => $this->comment
        );

        if($this->id){
            $array['id'] = $this->id;
        }

        return $array;
    }

    /*public function selectedDocToArray()
    {

        return array(
            'id' => $this->id,
            'name' => $this->name,
            'type' => $this->type,
            'size' => $this->size,
            'src' => $this->src,
            'dateUpload' => $this->dateUpload,
            'dateValidation' => $this->dateValidation,
            'comment' => $this->comment
        );
    }*/
}//class
