<?php
//header('Access-Control-Allow-Origin:*');
//header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

 
/*$data = (file_get_contents('php://input'));

file_put_contents('D:\doc\angular-images v2\data.json', $data);

echo $data;*/

//echo phpinfo();
require '../../vendor/autoload.php';
$collection = (new MongoDB\Client)->gallery->upload;
//$param = json_decode(file_get_contents('php://input'));
$param = $_GET['id'];
/*$insertOneResult = $col->insertOne([
    'username' => 'admin',
    'email' => 'admin@example.com',
    'name' => 'Admin User',
]);*/
//$document = $col->findOne(['_id' => new MongoDB\BSON\ObjectId('5cac6ef778240027bc003222')]);
/*$deleteResult = $col->deleteMany(['username' => 'admin']);

var_dump($deleteResult);*/

function deleteOne($param, $collection){
    
    $delete = $collection->deleteOne(['_id' => new MongoDB\BSON\ObjectId($param)]);

    return $delete->getDeletedCount();
}
echo(deleteOne($param,$collection));
?>