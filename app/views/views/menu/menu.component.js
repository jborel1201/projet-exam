angular.
    module('menu').
    component('menu', {

        templateUrl: "views/views/menu/menu.html",
        controller: function menuController($window,$scope) {
           
            //fonction de routage
            $scope.location = function (direction) {              
                $window.location.href = '#!/' + direction
            }

            $scope.redirectMobile = function(){
                $window.location.href = 'www/index.html'
            }

        }
    });