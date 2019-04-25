angular.
    module('menu').
    component('menu', {

        templateUrl: "views/views/menu/menu.html",
        controller: function menuController($routeParams) {
            ctrl = this;
            
            ctrl.codeError = $routeParams.codeError ? $routeParams.codeError : null;          
            ctrl.textError = $routeParams.textError ? $routeParams.textError : null;
           
        }
    });