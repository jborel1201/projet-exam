angular.
  module('imgApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/', {
          template: '<menu></menu>'         
        }).
        when('/galerie/:size', {
          template: '<galerie></galerie>'          
        }).
        when('/upload', {
          template: '<upload></upload>'
        }).
        when('/manage', {
          template: '<manage></manage>'
        }).                 
        otherwise('/');
    }
  ]);