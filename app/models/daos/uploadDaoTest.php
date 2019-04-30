<?php
include '../../controllers/routing.php';
include '../config/mongo-config.php';
include 'UploadDao.php';

$collection = defineCollection('upload');


$test = json_decode('{name:"paysage36.jpg",size:12929,"type":"image/jpeg","comment":[]}');
    


$result = UploadDao::insert( $test , $collection);


$resultInsert = UploadDao::select($collection);
var_dump($resultInsert);
