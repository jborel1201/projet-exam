<?php

require ROOT_PATH.'vendor/autoload.php';

function defineCollection($collectionName){
    return (new MongoDB\Client)->push->$collectionName;
}

