angular.
module('showImg').
component('showImg' , {

    templateUrl:"components/show-img/show-img.template.html",
    controller: [ '$routeParams', function showImgController($routeParams){
        var imgName = $routeParams.imgName;
        this.imageUrl = `img/${imgName}.jpg`
    }]
})