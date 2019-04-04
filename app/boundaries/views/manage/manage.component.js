angular.
    module('manage').
    component('manage', {

        templateUrl: "boundaries/views/manage/manage.html",
        controller: ['$localStorage', function manageController($localStorage) {

           self = this;
           self.storage = $localStorage.upload? $localStorage.upload : [];

           self.datas = [];         
           self.date = "";
           self.comment = "";

           self.indexActif = ""
           
           
           this.openFolder = function(folder,index){
               
               self.comment = folder.comment;
               self.date = folder.date;
               self.datas = folder.datas;               
               self.indexActif = index+1;
           }

        }]
    })