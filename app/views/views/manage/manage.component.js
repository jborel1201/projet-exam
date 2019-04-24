angular.
    module('manage').
    component('manage', {

        templateUrl: "views/views/manage/manage.html",
        controller: function manageController($timeout, UploadDatas, GalleryDatas, $route) {

            self = this;

            self.storage = [];
            self.datas = [];
            self.date = null;
            self.comment = null;
            self.id = null;
            self.indexActif = null;

            self.error = "";

            self.drag = function (e) {
                console.log(e)
            }


            UploadDatas.getUploadFiles().then(function successCallback(response) {
                if (response.status == 200) {
                    self.storage = response.data;
                }
                if (response.status == 202) {
                    console.log('pas de data retournée par la Bd')
                }

            }, function errorCallback(response) {

                responseError(response);
            });

            //Fonction d'ouverture du dossier
            //initialise les variables avec les datas du fichier
            this.openFolder = function (folder, index) {
                self.date = folder.dateUpload;
                self.id = folder.id.$oid;
                self.datas = folder.datas;
                self.indexActif = index + 1;
                initDraggable();
            }


            this.showComment = function (data) {
                self.comment = data ? data : [];
                $('#comment').removeClass('hidden')
            }


            function responseError(response) {
                self.error = response.status.toString() + " " + response.statusText;
                $('#error').removeClass('hidden');
            }
            function alertDataTransfert(response) {
                if (response != 1) {
                    alert('Problème lors du transfert des données!')
                }
            }

            this.deleteElement = function (data) {
                UpdateUploadBd(data);
            }

            /**
             * 
             * @param {*} data 
             */
            function UpdateUploadBd(data) {
                let id = self.id;

                if (self.datas.length == 1) {

                    UploadDatas.deleteDocument(id).then(function successCallback(response) {
                        alertDataTransfert(response.data)
                    }, function errorCallback(response) {
                        responseError(response);
                    });
                    $route.reload();

                } else {

                    self.datas.splice(self.datas.indexOf(data), 1)

                    UploadDatas.updateDocument(id, { 'files': self.datas }).then(function successCallback(response) {
                        alertDataTransfert(response.data)
                    }, function errorCallback(response) {
                        responseError(response);
                    });
                }
            }

            self.newCom = ""
            self.addNewCom = function () {

                if (verifCom(self.newCom)) {
                    self.comment.push(self.newCom);
                    self.newCom = "";
                    $('#comment').addClass('hidden');
                } else {
                    alert('Commentaire vide');
                }

            }



            self.closeComCard = function () {
                $('#comment').addClass('hidden');
            }

            var elementDrag = null
            var imgOfElementDrag = null;
            var nameOfElementDrag = null
            self.startDrag = (data) => {
                elementDrag = data;

                imgOfElementDrag = elementDrag.src;
                nameOfElementDrag = elementDrag.name;

            }




            /**
             * 
             */
            initDraggable = function () {
                $timeout(function () {

                    $('.draggable').draggable({
                        revert: true,
                        snap: ".droppable",
                        cursorAt: { left: 0, top: 0, bottom: 40, right: 40 },

                        helper: function () {

                            var bloc =
                                $(`
                            <div class='card border-primary mb-3 cloneImgDrop'>
                                <div class='card-header'>${nameOfElementDrag}</div>
                                <div class='card-body'>
                                    <img src=${imgOfElementDrag} style='width:100px'>
                                </div>
                            </div>
                                `);

                            return bloc
                        }

                    });
                });
            }
            //Configuration du Droppable
            ////////////////////////////            
            $(".droppable").droppable({
                tolerance: "pointer",
                drop: () => {

                    UpdateUploadBd(elementDrag);
                    GalleryDatas.insertFilesInGallery(elementDrag).then(function successCallback(response) {
                        alertDataTransfert(response.data)
                    }, function errorCallback(response) {
                        responseError(response)
                    });


                }

            });

            function verifCom(data) {
                let verif = true
                if (!data.trim()) {
                    verif = false;
                }
                return verif;
            }

        }
    });