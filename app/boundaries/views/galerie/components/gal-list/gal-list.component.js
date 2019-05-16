angular.
    module('galList').
    component('galList', {
        templateUrl: "boundaries/views/galerie/components/gal-list/gal-list.template.html",
        controller: ['Image', function listController(Image) {

            var ctrl = this;

            //récupération des data
            ctrl.images = Image.query();

            //tri de la liste par item
            //initialisation du tri
            ctrl.filterName = "date"
            ctrl.reverse = true;
            //fonction de modification au clic sur l'item
            ctrl.sortBy = function (filterName) {
                ctrl.reverse = (ctrl.filterName === filterName) ? !ctrl.reverse : false;
                ctrl.filterName = filterName;
            }
        }]
    });