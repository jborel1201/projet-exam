<?php
require_once 'iToArray.php';

class DocumentUpload implements iToArray
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

    public function toArray()
    {
        $array = array(
            'dateUpload' => $this->dateUpload,
            'data' => $this->data
        );

        if ($this->id) {
            $array['id'] = $this->id;
        }
        return $array;
    }
}//class
