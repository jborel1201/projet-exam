angular.
    module('upload').
    component('upload', {

        templateUrl: "view/pages/upload/upload.html",
        controller: ['$scope', '$routeParams', 'FilesUpload', function menuController($scope,$routeParams,FilesUpload) {          
         
         $scope.action = $routeParams.action

         $scope.files = FilesUpload.filesUpload;
         console.log($scope.files)


        $scope.$watch('files',function(){
            console.log('ok')
        })
         

        }]
    })