angular.
    module('menu').
    component('menu', {

        templateUrl: "boundaries/views/menu/menu.html",
        controller: ['$window','$scope', function menuController($window,$scope) {
           
            //fonction de routage
            $scope.location = function (direction) {              
                $window.location.href = '#!/' + direction
            }


            $(function () {

                //Changement de curseur lors du survol
                $('.item')
                    .on('mouseover', function () {
                        $(this).css({
                            'cursor': "pointer"
                        });
                    })
                    .on('mouseleave', function () {
                        $(this).css({
                            'cursor': "default"
                        });
                    });
            });

        }]
    })