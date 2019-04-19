<?php

require 'AbstractFile.php';

class FileUpload extends AbstractFile
{
 
    public function fileUploadToArray()
    {

        return array(
            'name' => $this->name,
            'type' => $this->type,
            'size' => $this->size,
            'dateUpload' => $this->dateUpload,
            'src' => $this->src,
            'comment' => $this->comment
        );
    }
}//class
