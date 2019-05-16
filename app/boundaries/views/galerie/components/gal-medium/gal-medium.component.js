angular.
    module('galMedium').
    component('galMedium', {
        templateUrl: "boundaries/views/galerie/components/gal-medium/gal-medium.template.html",
        controller: function mediumController(Image) {

            var ctrl = this

            ctrl.images = Image.query();

        }
    });
