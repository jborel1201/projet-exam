angular.
    module('galMedium').
    component('galMedium', {
        templateUrl: "views/components/gal-medium/gal-medium.template.html",
        controller: function mediumController(Image) {

            var ctrl = this

            ctrl.images = Image.query();

        }
    });
