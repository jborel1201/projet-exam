<?php

abstract class AbstractFile
{

    protected $name;
    protected $type;
    protected $size;
    protected $src;
    protected $comment;

 
    public function getName()
    {
        return $this->name;
    }

    public function setName($name)
    {
        $this->name = filter_var($name, FILTER_SANITIZE_STRING);
        return $this;
    }

    public function getType()
    {
        return $this->type;
    }

    public function setType($type)
    {
        $this->type = filter_var($type, FILTER_SANITIZE_STRING);
        return $this;
    }

    public function getSize()
    {
        return $this->size;
    }

    public function setSize($size)
    {

        $this->size = filter_var($size, FILTER_SANITIZE_NUMBER_INT);
        return $this;
    }

    public function getSrc()
    {
        return $this->src;
    }

    public function setSrc($src)
    {
        $this->src = filter_var($src, FILTER_SANITIZE_STRING);
        return $this;
    }

    public function getComment()
    {
        return $this->comment;
    }

    public function setComment($comment)
    {
        $this->comment = filter_var($comment, FILTER_SANITIZE_STRING);
        return $this;
    }

}//class
