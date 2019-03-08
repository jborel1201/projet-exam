angular.
    module('imgViewList').
    component('imgViewList', {
        templateUrl: "components/img-view-list/img-view-list.template.html",
        controller:['Image', function imgViewController(Image) {           
           
            this.images = Image.query();         

        }]
    });