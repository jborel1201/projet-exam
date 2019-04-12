<?php

require 'AbstractFile.php';

class FileUpload extends AbstractFile
{
    private $date;

    public function __construct()
    {
        $date = new DateTime();
        $this->date = $date->format('d-m-Y H:i:s');
    }


    public function fileUploadToArray()
    {

        return array(
            'name' => $this->name,
            'type' => $this->type,
            'size' => $this->size,
            'date' => $this->date,
            'src' => $this->src
        );
    }
}//class
