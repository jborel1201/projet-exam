<?php

class DocumentUpload
{
    private $id;
    private $datas;
    private $comment;
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

    public function getDatas()
    {
        return $this->datas;
    }

    public function setDatas($datas)
    {
        $this->datas = $datas;
        return $this;
    }

    public function getComment()
    {
        return $this->comment;
    }

    public function setComment($comment)
    {
        $this->comment = $comment;
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
            'comment' => $this->comment,
            'datas' => $this->datas
        );
    }

    public function selectedDocToArray()
    {
        return array(
            'id' => $this->id,
            'dateUpload' => $this->dateUpload,
            'comment' => $this->comment,
            'datas' => $this->datas
        );
    }
}//class
