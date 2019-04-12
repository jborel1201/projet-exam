<?php

class UploadMongoDoc
{
    private $id;
    private $comment;
    private $date;
    private $datas;

    public function __construct()
    {
        $date = new DateTime();
        $this->date = $date->format('d-m-Y H:i:s');
    }

    public function getId()
    {
        return $this->id;
    }

    public function setId($id)
    {
        $this->id = $id;
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

    public function getDatas()
    {
        return $this->datas;
    }

    public function setDatas($datas)
    {
        $this->datas = $datas;
        return $this;
    }

    public function docUploadToArray()
    {
        return array(       
            'date' => $this->date,
            'comment' => $this->comment,
            'datas' => $this->datas         
        );
    }

    public function selectedDocToArray()
    {
        return array(
            'id' => $this->id,
            'date' => $this->date,
            'comment' => $this->comment,
            'datas' => $this->datas         
        );
    }
}//class
