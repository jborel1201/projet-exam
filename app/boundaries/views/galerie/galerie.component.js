angular.
    module('galerie').
    component('galerie', {
        templateUrl: "boundaries/views/galerie/galerie.html",
        controller: ['$scope', '$routeParams', function galerieController($scope, $routeParams) {

            $scope.size = $routeParams.size;
            console.log($scope.size)


        }]
    });