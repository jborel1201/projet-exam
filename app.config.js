angular.
  module('imgApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.       
        when('/img/list', {
          template : '<img-view-list></img-view-list>'
        }).
        when('/img/:nb', {
          template : '<img-view-gal></img-view-gal>'
        }).
        when('/view/:imgName', {
          template: '<h1>test</h1>'
        }).
        otherwise('/img/4');
    }
  ]);