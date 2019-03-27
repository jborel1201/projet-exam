angular.
  module('imgApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.       
        when('/img/list', {
          template : '<img-view-list></img-view-list>'
        }).
        when('/img/gal/small', {
          template : '<img-view-gal-small></img-view-gal-small>'
        }).
        when('/img/gal/medium', {
          template : '<img-view-gal-medium></img-view-gal-medium>'
        }).
        when('/img/gal/large', {
          template : '<img-view-gal-large></img-view-gal-large>'
        }).
        when('/view/:imgName', {
          template: '<show-img></show-img>'
        }).
        otherwise('/img/gal/medium');
    }
  ]);