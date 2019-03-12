angular.module('imgApp',[
    'ngRoute',
    'selectBar',
    'imgViewList',
    'imgViewGal',
    'showImg',
    'imageService'
    
])
.controller('test',function testController($scope){

console.log($scope);
$scope.imagesDrop = [];


});