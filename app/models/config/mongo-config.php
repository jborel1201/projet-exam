<?php
require ROOT_PATH.'vendor/autoload.php';
$collectionUpload = (new MongoDB\Client)->gallery->upload;