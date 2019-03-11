angular.
    module('imgViewGal').
    component('imgViewGal', {
        templateUrl: "components/img-view-gal/img-view-gal.template.html",
        controller: [ '$routeParams', 'Image' , function imgViewController($routeParams,Image) {     

            this.images = Image.query();            
            this.col = $routeParams.nb;
            

        }

       
        ]});