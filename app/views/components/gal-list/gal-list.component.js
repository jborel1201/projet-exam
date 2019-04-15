angular.
    module('galList').
    component('galList', {
        templateUrl: "views/components/gal-list/gal-list.template.html",
        controller: function listController(Image,$scope) {

            var ctrl = this;

            //récupération des datas
            ctrl.images = Image.query();

            //tri de la liste par item
            //initialisation du tri
            ctrl.filterName = "date"
            ctrl.reverse = true;
            //fonction de modification au clic sur l'item
            $scope.sortBy = function (filterName) {
                ctrl.reverse = (ctrl.filterName === filterName) ? !ctrl.reverse : false;
                ctrl.filterName = filterName;
            }
        }
    });