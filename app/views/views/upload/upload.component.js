angular.
    module('upload').
    component('upload', {

        templateUrl: "views/views/upload/upload.html",
        controller: function uploadController($scope, UploadDatas, InputControl, AjaxResponse) {

            var ctrl = this;

            ctrl.files = [];
            ctrl.globalComment = "";
            ctrl.privateComment = "";



            /*/////////////////////////////////////////////////////////////
                       chargement des fichiers/Drag and Drop
           *//////////////////////////////////////////////////////////////

            //Variables de décompte des fichiers chargés
            ctrl.count = null;
            var countError = null;
            ctrl.numberOfUploadFiles = 0;
            ctrl.visible = false;

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

                if (InputControl.isCorrectFileType(file.name)) {

                    reader.onload = function () {
                        fileRead = new uploadFile(file.name, file.size, file.type, this.result, []);
                    }
                    reader.readAsDataURL(file);
                    //ajout au scope des fichiers lus
                    reader.onloadend = function () {
                        
                        ctrl.count++;
                        //ajout elt à la variable files
                        $scope.$apply(() => { ctrl.files.push(fileRead) });

                        //masquage du compte lorsque tous les elements sont chargés
                        if (ctrl.count == ctrl.numberOfUploadFiles) {

                            setTimeout(function () {
                                $scope.$apply(() => { ctrl.visible = false });
                            }, 1000);
                        }
                    }
                } else {
                    ctrl.count++;
                    countError++;
                }
            }

            /**
             * Drag and Drop events
             */
            // modification du style lors du deplacement
            $(document)
                .on('dragover', '#form-input-files ', function () {
                    $(this).removeClass("style-drag-drop");
                    return false;
                })
                .on('dragleave', '#form-input-files ', function () {
                    $(this).addClass("style-drag-drop");
                    return false;
                })
                .on('drop', '#form-input-files ', function () {
                    $(this).addClass("style-drag-drop");
                });
            //action lors du drop
            $("#input-files").on('change', function () {
                //init
                ctrl.files = [];
                ctrl.count = 0;
                countError = 0;
                ctrl.visible = true;


                var filesList = $(this).get(0).files;// recupération des fichiers
               
                ctrl.numberOfUploadFiles = filesList.length;
                [].forEach.call(filesList, readAndAddFile);

                //reset input et affiche erreur
                $(this).val('');
                if (countError > 0) {
                    if (countError == 1) {
                        alert(`${countError} fichier n'a pas été ajouté.\n Problème de format.`)
                    } else {
                        alert(`${countError} fichiers n'ont pas été ajoutés.\n Problème de format.`)
                    }
                }

            });



            /*-------------------------------------------------------------------------------------------------------
                        Items
            */

            ctrl.removeElt = function (index) { ctrl.files.splice(index, 1) }

            var itemSelected = null
            /**
             * Ouverture input com et recupération de l'item selectionné
             */
            ctrl.openInputCom = function (file) {

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

            ctrl.cancelCom = function () { cleanInputMenu() }

            ctrl.addCom = function () {
                if (InputControl.isValidCom(ctrl.privateComment)) {
                    itemSelected.comment.push(ctrl.privateComment)
                } else {
                    alert('Champs vide. Commentaire non Ajouté.');
                }

                cleanInputMenu();
            }

            /**
             * clear input et itemSelected. cache l'input
             */
            function cleanInputMenu() {
                ctrl.privateComment = "";
                itemSelected = null;
                $('#private-com-input').addClass("hidden");
            }

            /*--------------------------------------------------------------------------------------------------------
                        validation upload
            */

            ctrl.removeAll = function () { clearScope()         
               
            }




            ctrl.save = function () {
                if (InputControl.isValidCom(ctrl.globalComment)) {
                    for (file of ctrl.files) { file.comment.push(ctrl.globalComment) }
                }
                var datas = { 'files': ctrl.files }

                UploadDatas.insertFiles(datas).then(function successCallback(response) {
                    console.log(response.data)

                }, function errorCallback(response) { AjaxResponse.responseError(response) }
                );





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
                ctrl.files = [];
                ctrl.comment = "";
            }



        }//ctrl
    })