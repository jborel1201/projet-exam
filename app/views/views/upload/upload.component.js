angular.
    module('upload').
    component('upload', {

        templateUrl: "views/views/upload/upload.html",
        controller: function uploadController($scope, UploadDatas) {

            $scope.files = [];

            var self = this;
            self.globalComment = "";
            self.privateComment = "";

            var count = 0;

            /*/////////////////////////////////////////////////////////////
                       chargement des fichiers/Drag and Drop
           *//////////////////////////////////////////////////////////////

            /**
             *  modele objet file
             * @param {string} name 
             * @param {int} size 
             * @param {string} type 
             * @param {base64} src 
             * @param {string} comment 
             */
            function uploadFile(name, size, type, src, comment) {
                this.name = name;
                this.size = size;
                this.type = type;
                this.src = src
                this.comment = comment
            }


            /**
             * lecture des fichiers et ajout au tableau
             * @param {*} file 
             * @param {*} i 
             * @param {*} files 
             */
            function readAndAddFile(file, i, files) {
                let reader = new FileReader();
                let nbFiles = files.length;

                //lecture du fichier et création de l'objet file à transférer
                reader.addEventListener("load", function () {
                    fileRead = new uploadFile(file.name, file.size, file.type, this.result, []);
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

            /**
             * Drag and Drop events
             */
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


            /**
             * traitement des éléments lors du changement d'état de l'input 
             */
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

            });





            /*-------------------------------------------------------------------------------------------------------
                        Items
            */

            $scope.removeElt = function (index) {
                $scope.files.splice(index, 1)

            }

            var itemSelected = null
            /**
             * Ouverture input com et recupération de l'item selectionné
             */
            self.openInputCom = function (file) {

                itemSelected = file;

                //ouverture de l'input(ouverture sur la gauche)
                let menu = $('#private-com-input');
                //Affichage du menu
                menu.removeClass("hidden");

                //position click souris
                let posX = event.pageX;
                let posY = event.pageY;
                //largeur de l'input
                let menuWidth = menu.innerWidth();

                menu.css({
                    'left': (posX - menuWidth) + 'px',
                    'top': posY + 'px'
                })

            }

            self.cancelCom = function () {

                cleanInputMenu();
            }


            self.addCom = function () {
                if (verifCom(self.privateComment)) {
                    itemSelected.comment.push(self.privateComment);
                }else{
                    alert('Champs vide. Commentaire non Ajouté.');
                }

                cleanInputMenu();
            }

            /**
             * clear input et itemSelected. cache l'input
             */
            function cleanInputMenu() {
                console.log($scope.files)
                self.privateComment = "";
                itemSelected = null;
                $('#private-com-input').addClass("hidden");
            }

            /*--------------------------------------------------------------------------------------------------------
                        validation upload
            */

            $scope.removeAll = function () {
                clearScope();
            }


            $scope.save = function () {
                if (verifCom(self.globalComment)) {
                    for (file of $scope.files) {
                        file.comment.push(self.globalComment)
                    }
                }
                console.log($scope.files)
                var datas = {
                    'files': $scope.files
                }

                UploadDatas.insertFiles(datas).then(function successCallback(response) {
                    console.log(response.data)
                    //alert(`${response.data} a été enregistrer`)
                    /*for( let item of response.data ){
                        console.log(JSON.parse(item))
                    }*/
                }, function errorCallback(response) {

                });



                /*$http({
                    method: 'GET',
                    url: 'controllers/test2.php',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8' }

                }).then(function successCallback(response) {
                    let data = response.data
                    //console.log(data[0].id.$oid)
                    //console.log(JSON.parse(data[0].datas))
                    // console.log(data[0].datas)

                    //alert(JSON.parse(data[0].id))
                    /*for( let item of data[0].datas){
                        console.log(item.id);
                    }
                    //var testDelete = data[0].id.$oid;

                    testDelete.id = data[0].id;
                    testDelete.comment = data[0].comment;
                    testDelete.datas = data[0].datas;

                    $http({
                        method: 'DELETE',
                        url: `controllers/test.php?id=${testDelete}`,
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                    }).then(function successCallback(response) {
                        console.log(response.data)

                    }, function errorCallback(response) {
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                    });


                }, function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });*/


                /*
                service
                */
                //Datas.post(JSON.stringify($scope.files))

                clearScope();

            }


            /*---------------------------------------------------------------------------------------
                fonctions utilitaires
            */

            function clearScope() {
                $scope.files = [];
                self.comment = "";
            }

            function verifCom(data) {
                let verif = true
                if (!data) {                    
                    verif = false;
                }
                return verif;
            }


        }//ctrl
    })