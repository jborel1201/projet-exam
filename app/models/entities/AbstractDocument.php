<?php

abstract class AbstractDocument
{

    protected $id;
    protected $datas;


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
}//class
