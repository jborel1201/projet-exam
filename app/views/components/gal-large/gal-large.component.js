angular.
    module('galLarge').
    component('galLarge', {
        templateUrl: "views/components/gal-large/gal-large.template.html",
        controller: function largeController(Image) {

            this.images = Image.query();

        }

    });
