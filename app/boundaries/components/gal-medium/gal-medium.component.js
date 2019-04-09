angular.
    module('galMedium').
    component('galMedium', {
        templateUrl: "boundaries/components/gal-medium/gal-medium.template.html",
        controller: function mediumController(Image) {


            this.images = Image.query();

        }



    });
