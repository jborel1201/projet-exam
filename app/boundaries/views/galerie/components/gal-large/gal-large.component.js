angular.
    module('galLarge').
    component('galLarge', {
        templateUrl: "boundaries/views/galerie/components/gal-large/gal-large.template.html",
        controller: function largeController(Image) {

            var ctrl = this

            ctrl.images = Image.query();

        }
    });
