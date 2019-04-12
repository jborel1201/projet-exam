angular.
    module('galerie').
    component('galerie', {
        templateUrl: "views/views/galerie/galerie.html",
        controller: function galerieController($scope, $routeParams) {

            $scope.size = $routeParams.size;


        }
    });