angular.
    module('upload').
    component('upload', {

        templateUrl: "boundaries/views/upload/upload.html",
        controller: function uploadController($scope, $localStorage, $http) {


            $scope.files = [];
            var self = this;
            self.comment = "";
            var storage = $localStorage.upload ? $localStorage.upload : []
            var count = 0;


            $scope.removeElt = function (index) {
                $scope.files.splice(index, 1)

            }

            $scope.removeAll = function () {
                clearScope();
            }

            $scope.save = function () {
                objUpload = {}
                objUpload.date = new Date();
                objUpload.comment = self.comment;
                objUpload.datas = $scope.files;
                storage.push(objUpload)

                $localStorage.upload = storage;
                

                /*$http({
                    method: 'POST',
                    url: 'controllers/test2.php',
                    data:{
                        'comment':self.comment,
                        'files':$scope.files
                    }
                    ,
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

                }).then(function successCallback(response) {
                    //console.log(response.data)
                    alert(`${response.data} a été enregistrer`)
                    for( let item of response.data ){
                        console.log(JSON.parse(item))
                    }
                }, function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });*/

                /*$http({
                    method: 'GET',
                    url: 'controllers/test2.php',              
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8' }

                }).then(function successCallback(response) {
                    let data = response.data
                    //console.log(JSON.parse(data[0].datas))
                   // console.log(data[0].datas)

                    //alert(JSON.parse(data[0].id))
                    for( let item of JSON.parse(data[0].datas)){
                        console.log(JSON.parse(item))
                    }
                }, function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                })*/
                /*
                service
                */
                //Datas.post(JSON.stringify($scope.files))

                clearScope();

            }

            function clearScope() {
                $scope.files = [];
                self.comment = "";
            }

            /*/////////////////////////////////////////////////////////////
                                        UploadFiles
            *//////////////////////////////////////////////////////////////


            // modele objet file
            function uploadFile(name, size, type, date, src) {
                this.name = name;
                this.size = size;
                this.type = type;                
                this.src = src
            }

            // lecture des fichiers et ajout au tableau
            function readAndAddFile(file, i, files) {
                let reader = new FileReader();
                let nbFiles = files.length;

                //lecture du fichier et création de l'objet file à transférer
                reader.addEventListener("load", function () {
                    fileRead = new uploadFile(file.name, file.size, file.type, new Date(), this.result);
                }, false);
                reader.readAsDataURL(file);
                //ajout au scope des fichiers lus
                reader.addEventListener("loadend", function () {
                    //variables avancement progress-bar
                    count++;
                    let pourcent = Math.ceil(count * 100 / nbFiles);
                    //ajout el à $scope.files
                    $scope.$apply(function () {
                        $scope.files.push(fileRead);
                    });
                    //update progress-bar
                    $('.progress-bar').css('width', pourcent + '%').attr('aria-valuenow', pourcent);
                    if ($('.progress-bar').attr('aria-valuenow') == 100) {
                        setTimeout(function () {
                            $(".progress").addClass("hidden");

                        }, 1000);
                    }

                });

            }


            //Drag and Drop events            
            $(document)
                .on('dragover', '#dragDropUpload', function () {
                    $(this).addClass("styleDragDrop");
                    return false;
                })
                .on('dragleave', '#dragDropUpload', function () {
                    $(this).removeClass("styleDragDrop");
                    return false;
                })
                .on('drop', '#dragDropUpload', function () {
                    $(this).removeClass("styleDragDrop");
                });


            // traitement des éléments lors du changement d'état de l'input 
            $(".inputFile").on('change', function () {
                //init
                $scope.files = [];
                count = 0;
                $(".progress").removeClass("hidden");
                //
                var filesList = $(this).get(0).files;
                [].forEach.call(filesList, readAndAddFile);
                //reset
                $(this).val('')



                /*$.ajax({
                    type: 'POST',
                    url: 'controllers/test.php',
                    data: JSON.stringify($scope.files),
                    headers : {'Content-Type': 'application/x-www-form-urlencoded'},
                    success: function (data) {
                        console.log(data);
                    }
                });*/

                /*$http({
                    method: 'POST',
                    url: 'controllers/test.php',
                    data: JSON.stringify($scope.files),
                  }).then(function successCallback(response) {
                      console.log(response)
                    }, function errorCallback(response) {
                      // called asynchronously if an error occurs
                      // or server returns response with an error status.
                    });*/



            });

        }//ctrl
    })