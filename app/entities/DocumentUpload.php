<?php

class DocumentUpload
{
    private $id;
    private $data;   
    private $dateUpload;

    public function getId()
    {
        return $this->id;
    }

    public function setId($id)
    {
        $this->id = $id;
        return $this;
    }

    public function getData()
    {
        return $this->data;
    }

    public function setData($data)
    {
        $this->data = $data;
        return $this;
    }

    
    public function getDateUpload()
    {
        return $this->dateUpload;
    }

    public function setDateUpload($dateUpload)
    {
        $this->dateUpload = $dateUpload;
        return $this;
    }

    public function docUploadToArray()
    {
        return array(
            'dateUpload' => $this->dateUpload,            
            'data' => $this->data
        );
    }

    public function selectedDocToArray()
    {
        return array(
            'id' => $this->id,
            'dateUpload' => $this->dateUpload,
            'data' => $this->data
        );
    }
}//class
