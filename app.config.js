angular.
  module('imgApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/', {
          template: '<img-view></img-view>'
        }).
        when('/:imgName', {
          template: '<h1>test</h1>'
        }).
        otherwise('/');
    }
  ]);