angular.
    module('upload').
    component('upload', {

        templateUrl: "views/views/upload/upload.html",
        controller: function uploadController($scope, UploadDatas) {

            $scope.files = [];

            var self = this;
            self.globalComment = "";
            self.privateComment = "";



            /*/////////////////////////////////////////////////////////////
                       chargement des fichiers/Drag and Drop
           *//////////////////////////////////////////////////////////////

            //Variables de décompte des fichiers chargés
            self.count = 0;
            self.numberOfUploadFiles = 0;
            self.visible = false;

            /**
             *  object file
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
             * callback du foreach exécuté durant l'upload des fichiers
             * @param {*} file//élément courant            
             */
            function readAndAddFile(file) {
                let reader = new FileReader();

                //lecture du fichier et création de l'objet file à transférer
                reader.addEventListener("load", function () {
                    fileRead = new uploadFile(file.name, file.size, file.type, this.result, []);
                }, false);
                reader.readAsDataURL(file);
                //ajout au scope des fichiers lus
                reader.addEventListener("loadend", function () {

                    self.count++;

                    //ajout el à $scope.files
                    $scope.$apply(function () {
                        $scope.files.push(fileRead);
                    });

                    //masquage du compte lorsque tous les elements sont chargés
                    if (self.count == self.numberOfUploadFiles) {
                        
                        setTimeout(function () { 
                            $scope.$apply(function () {
                                self.visible = false;
                            });                      
                        }, 1000);
                    }

                });

            }

            /**
             * Drag and Drop events
             */
            $(document)
                .on('dragover', '#form-input-files ', function (e) {
                    $(this).addClass("styleDragDrop");
                    return false;
                })
                .on('dragleave', '#form-input-files ', function (e) {
                    $(this).removeClass("styleDragDrop");
                    return false;
                })
                .on('drop', '#form-input-files ', function (e) {
                    $(this).removeClass("styleDragDrop");
                });

            $("#input-files").on('change', function () {
                //init
                $scope.files = [];
                self.count = 0;
                self.visible = true;
                var filesList = $(this).get(0).files;
                self.numberOfUploadFiles = filesList.length;
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
                } else {
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