angular.
  module('imgApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/', {
          template: '<img-view></img-view>'
        }).
        when('/img/list', {
          template : '<img-view-list></img-view-list>'
        }).
        when('/img/:nb', {
          template : '<p>nb</p>'
        }).
        when('/:imgName', {
          template: '<h1>test</h1>'
        }).
        otherwise('/');
    }
  ]);