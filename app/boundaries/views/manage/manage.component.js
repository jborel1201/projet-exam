angular.
    module('manage').
    component('manage', {

        templateUrl: "boundaries/views/manage/manage.html",
        controller: function manageController($localStorage, $http, UploadDatas) {

            self = this;

            self.storage =[];            
            self.datas = [];
            self.date = "";
            self.comment = "";
            self.indexActif = ""



            UploadDatas.getUploadFiles().then(function successCallback(response) {
                self.storage = response.data
                             
            }, function errorCallback(response) {
                alert(response)
            })


            this.openFolder = function (folder, index) {

                self.comment = folder.comment;
                self.date = folder.date;
                self.datas = folder.datas;
                self.indexActif = index + 1;
            }

        }
    })