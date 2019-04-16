<?php

require 'AbstractFile.php';

class FileGallery extends AbstractFile
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

    public function fileGalleryToArray()
    {

        return array(
            'name' => $this->name,
            'type' => $this->type,
            'size' => $this->size,
            'src' => $this->src,
            'dateUpload' => $this->dateUpload,
            'dateValidation' => $this->dateValidation
        );
    }

    public function selectedDocToArray()
    {

        return array(
            'id' => $this->id,
            'name' => $this->name,
            'type' => $this->type,
            'size' => $this->size,
            'src' => $this->src,
            'dateUpload' => $this->dateUpload,
            'dateValidation' => $this->dateValidation
        );
    }
}//class
