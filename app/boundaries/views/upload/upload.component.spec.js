describe('controller : uploadController', function () {
    beforeEach(module('upload'));

    var uploadController, scope;

    beforeEach(inject(function ($controller, $rootScope) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        scope = $rootScope.$new();
        uploadController = $controller('uploadController', {
            $scope: scope
        });
    }));

    it('',function(){
        expect($scope.files.length).toEqual(0);
    })
    /*describe('$scope.removeAll', function () {
        it('', function () {
            var $scope = $rootScope;
            $controller('uploadController', { $scope: $scope });
            $scope.files = [1, 2, 3, 4, 5];

            $scope.removeAll();
            expect($scope.file).toEqual('[]');
        });
    });*/
});