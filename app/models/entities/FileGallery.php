<?php

require 'AbstractFile.php';

class FileGallery extends AbstractFile
{
    protected $dateValidation;

    public function getDateValidation()
    {
        return $this->dateValidation;
    }

    public function setDateValidation($dateValidation)
    {
        $this->dateValidation = $dateValidation;
        return $this;
    }
 
    public function fileGaleryToArray()
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
}//class