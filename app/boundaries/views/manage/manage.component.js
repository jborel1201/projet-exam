angular.
    module('manage').
    component('manage', {

        templateUrl: "boundaries/views/manage/manage.html",
        controller: function manageController($localStorage, $http) {

            self = this;
            // self.storage = $localStorage.upload ? $localStorage.upload : [];
            //console.log(self.storage);
            self.datas = [];
            self.date = "";
            self.comment = "";

            self.indexActif = ""

console.log(
            $http({
                method: 'GET',
                url: 'controllers/test2.php',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8' }

            }).then(function successCallback(response) {
                let responseReturn = [];
                for (let document of response.data) {
                    let datas = []
                    let item = {}
                    for (let data of JSON.parse(document.datas)){
                        datas.push(JSON.parse(data))
                    }
                    item.id = document.id;
                    item.comment = document.comment;
                    item.datas = datas;
                    responseReturn.push(item)
                }
                //console.log(responseReturn)
                //self.storage = responseReturn
                //console.log(JSON.parse(data[0].datas))
                // console.log(data[0].datas)
                return responseReturn
                //alert(JSON.parse(data[0].id))
                /*for( let item of JSON.parse(data[0].datas)){
                    self.datas.push(JSON.parse(item));
                }*/
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            })
    )

            this.openFolder = function (folder,index) {

                self.comment = folder.comment;
                self.date = folder.date;
                self.datas = folder.datas;
                self.indexActif = index + 1;
            }

        }
    })