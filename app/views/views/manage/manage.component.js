angular.
    module('manage').
    component('manage', {

        templateUrl: "views/views/manage/manage.html",
        controller: function manageController(UploadDatas,$route) {

            self = this;

            self.storage = [];
            self.datas = [];
            self.date = null;
            self.comment = null;
            self.id = null;
            self.indexActif = null;


            //Récupération des données de la Bd
            UploadDatas.getUploadFiles().then(function successCallback(response) {
                self.storage = response.data;
            }, function errorCallback(response) {
                alert(response)
            });

            //Fonction d'ouverture d'un dossier. 
            this.openFolder = function (folder, index) {                
                self.date = folder.dateUpload;
                self.id = folder.id.$oid;
                self.datas = folder.datas;
                self.indexActif = index + 1;

            }


            this.showComment = function(data){
                self.comment = data;
                $('#comment').removeClass('hidden')
            }



            this.up = function (data) {
                
                let id = self.id;
               
                if (self.datas.length == 1) {
                   
                    UploadDatas.deleteDocument(id).then(function successCallback(response) {
                        console.log(response.data);                      
                    }, function errorCallback(response) {
                        alert(response)
                    });
                    $route.reload();
                   
                } else {
                   
                    self.datas.splice(self.datas.indexOf(data), 1)

                    UploadDatas.updateDocument(id, { 'files': self.datas }).then(function successCallback(response) {
                        console.log(response.data)
                    }, function errorCallback(response) {
                        alert(response)
                    });
                }
            }



        }
    });