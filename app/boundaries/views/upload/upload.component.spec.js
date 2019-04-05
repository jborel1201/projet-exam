describe('uploadController', function() {
    beforeEach(module('upload'));
  
    var $controller, $rootScope;
  
    beforeEach(inject(function(_$controller_, _$rootScope_){
      // The injector unwraps the underscores (_) from around the parameter names when matching
      $controller = _$controller_;
      $rootScope = _$rootScope_;
    }));
  
    describe('$scope.removeAll', function() {
      it('', function() {
        var $scope = $rootScope;
        var controller = $controller('uploadController', { $scope: $scope });
        $scope.files = [1,2,3,4,5];
       
        $scope.removeAll();
        expect($scope.file).toEqual('[]');
      });
    });
  });