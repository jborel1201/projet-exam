<?php
//header('Access-Control-Allow-Origin:*');
//header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

 
$data = (file_get_contents('php://input'));

//file_put_contents('D:\doc\angular-images v2\data.json', $data);

echo $data;
?>