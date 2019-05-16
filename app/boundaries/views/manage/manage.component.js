angular.
    module('manage').
    component('manage', {

        templateUrl: "boundaries/views/manage/manage.html",
        controller: function manageController($timeout, UploadData, GalleryData, $route, InputControl, AjaxResponse) {

            self = this;//fixe le context

            // Recupération des dossiers avec les fichiers uploadés
            self.storage = [];
            UploadData.getUploadFiles().then(
                function successCallback(response) {

                    if (response.status == 200) { self.storage = response.data }
                    if (response.status == 202) { console.log('pas de data retournée par la Bd') }

                },
                function errorCallback(response) { AjaxResponse.responseError(response) }
            );

            //Ouverture du dossier            
            self.data = [];
            self.date = null;
            self.id = null;
            self.indexActif = null;
            self.openFolder = function (folder, index) {
                //init des variables du scope
                self.date = folder.dateUpload;
                self.id = folder.id.$oid;
                self.data = folder.data;
                self.indexActif = index + 1;
                //init le drag drop
                initDraggable();
            }

            /************************************
             * Commentaires
             *///////////////////////////////////

            //affichage des commentaires de l'image selectionnée
            self.comments = null;
            self.newCom = "";//variable attaché a l'input des commentaire
            this.showComment = function (data) {
                self.comments = data ? data : [];
                $('#comment-box').removeClass('hidden');
            }

            //ajouter un nouveau commentaire
            self.addNewCom = function () {
                if (InputControl.isValidCom(self.newCom)) {
                    self.comments.push(self.newCom);//ajoute un commentaires aux commentaires existant
                    clearCommentBox()
                } else { 
                    alert('Commentaire vide') 
                }
            }

            //fermeture de la box commentaire
            self.closeComCard = function () { clearCommentBox() }

            /**
             * Fonction de réinitialisation de la box commentaire
             */
            function clearCommentBox() {
                self.newCom = "";
                $('#comment-box').addClass('hidden');
            }

            /************************************
            * Action sur les images
            *///////////////////////////////////

            /**
             * Fonction de mise à jour de la collection upload lors d'une modification 
             * @param {*} data 
             */
            function UpdateUploadBd(data) {

                let id = self.id;

                if (self.data.length == 1) {

                    UploadData.deleteDocument(id).then(
                        function successCallback(response) { AjaxResponse.alertDataTransfert(response.data) },
                        function errorCallback(response) { AjaxResponse.responseError(response) });

                    $route.reload();//rafraichit la page

                } else {

                    self.data.splice(self.data.indexOf(data), 1)

                    UploadData.updateDocument(id, { 'files': self.data }).then(
                        function successCallback(response) { AjaxResponse.alertDataTransfert(response.data) },
                        function errorCallback(response) { AjaxResponse.responseError(response) });
                }
            }

            //supprime l'image
            self.deleteElement = function (data) { UpdateUploadBd(data) }


            //valide image lors du drop           
            $(".droppable").droppable({
                tolerance: "pointer",
                drop: () => {
                    //mise à jour collection Upload
                    UpdateUploadBd(elementDrag);
                    //insert dans la galerie
                    GalleryData.insertFilesInGallery(elementDrag).then(
                        function successCallback(response) { alertDataTransfert(response.data) },
                        function errorCallback(response) { AjaxResponse.responseError(response) });
                }
            });


            /************************************
            * initialisation Drag
            *///////////////////////////////////

            //recupère l'objet selectionné
            var elementDrag = null
            self.startDrag = (data) => { elementDrag = data }

            /**
             * Fonction d'initialisation du drag           
             */
            initDraggable = function () {
                //déclenchement du scan jquery aprés manipulation du DOM par angular
                $timeout(function () {
                    $('.draggable').draggable({
                        revert: true,
                        snap: ".droppable",
                        cursorAt: { left: 0, top: 0, bottom: 40, right: 40 },
                        // création d'une vignette fictive représentant l'élément déplacé
                        helper: function () {
                            return $(`
                            <div class='card border-primary mb-3' id='clone-img-drop'>
                                <div class='card-header'>${elementDrag.name}</div>
                                <div class='card-body'>
                                    <img src=${elementDrag.src} style='width:100px'>
                                </div>
                            </div>`);
                        }
                    });
                });
            }
        }
    });