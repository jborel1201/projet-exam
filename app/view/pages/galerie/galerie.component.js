angular.
    module('galerie').
    component('galerie', {

        templateUrl: "view/pages/galerie/galerie.html",
        controller: ['$scope','$routeParams', function galerieController($scope,$routeParams) {           
         
            var size = $routeParams.size;
            console.log(size)
           
            
        }]
    });