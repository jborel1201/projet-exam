<?php

class File{

    private $name;
    private $type;
    private $size;
    private $src;
    private $date;

    public function __construct()
    {
        $this->date = new DateTime();
    }

    
    public function getName(){
        return $this->name;
    }

    public function setName($name){
        $this->name = filter_var($name, FILTER_SANITIZE_STRING);
        return $this;
    }

    public function getType(){
        return $this->type;
    }

    public function setType($type){
        $this->type = filter_var($type, FILTER_SANITIZE_STRING);
        return $this;
    }

    public function getSize(){
        return $this->size;
    }

    public function setSize($size){
        $this->size = filter_var($size, FILTER_SANITIZE_NUMBER_INT);
        return $this;
    }

    public function getSrc(){
        return $this->src;
    }

    public function setSrc($src){
        $this->size = filter_var($src, FILTER_SANITIZE_STRING);
        return $this;
    }
}//class
