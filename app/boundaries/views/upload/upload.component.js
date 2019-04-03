angular.
    module('upload').
    component('upload', {

        templateUrl: "boundaries/views/upload/upload.html",
        controller: ['$scope', '$routeParams', function menuController($scope, $routeParams) {

            $scope.action = $routeParams.action;
            
        }]//ctrl
    })