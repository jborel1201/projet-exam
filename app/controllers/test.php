<?php
//header('Access-Control-Allow-Origin:*');
//header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

 
/*$data = (file_get_contents('php://input'));

file_put_contents('D:\doc\angular-images v2\data.json', $data);

echo $data;*/

//echo phpinfo();
require '../../vendor/autoload.php';
$col = (new MongoDB\Client)->gallery->upload;

/*$insertOneResult = $col->insertOne([
    'username' => 'admin',
    'email' => 'admin@example.com',
    'name' => 'Admin User',
]);*/
//$document = $col->findOne(['_id' => new MongoDB\BSON\ObjectId('5cac6ef778240027bc003222')]);
$deleteResult = $col->deleteMany(['username' => 'admin']);

var_dump($deleteResult);
?>