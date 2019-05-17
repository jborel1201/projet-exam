<?php

require 'AbstractFile.php';
require_once 'iToArray.php';

class FileUpload extends AbstractFile implements iToArray
{

    public function toArray()
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
