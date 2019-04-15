<?php

require 'AbstractDocument.php';

class DocumentGallery extends AbstractDocument
{

    public function docUploadToArray()
    {
        return array(
            'dateUpload' => $this->dateUpload,
            'datas' => $this->datas
        );
    }

    public function selectedDocToArray()
    {
        return array(
            'id' => $this->id,
            'datas' => $this->datas
        );
    }
}//class
