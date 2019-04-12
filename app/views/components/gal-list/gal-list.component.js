angular.
    module('galList').
    component('galList', {
        templateUrl: "views/components/gal-list/gal-list.template.html",
        controller: function listController(Image,$scope) {

            var ctrl = this;

            ctrl.filterName = "date";
            ctrl.reverse= true;
            ctrl.images = Image.query();

            $scope.sortBy = function(filterName){
                ctrl.reverse = (ctrl.filterName === filterName) ? !ctrl.reverse : false;
                ctrl.filterName = filterName;
            }
        }
    });