angular.
module('showImg').
component('showImg' , {

    templateUrl:"views/components/show-img/show-img.template.html",
    controller: [ '$routeParams', 'Image', function showImgController($routeParams,Image){
        //var imgName = $routeParams.imgName;
        //this.imageUrl = `img/${imgName}.jpg`

        this.image = Image.get({imgName: $routeParams.imgName});
    }]
})