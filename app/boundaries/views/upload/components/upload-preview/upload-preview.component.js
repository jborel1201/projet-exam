angular.
    module('uploadPreview').
    component('uploadPreview', {
        templateUrl: "boundaries/views/upload/components/upload-preview/upload-preview.html",
        controller: function uploadPreviewController($scope, UploadData, AjaxResponse, InputControl) {

            const uploadCtrl = $scope.$parent.$parent.$ctrl
            ctrl = this;

            ctrl.files = uploadCtrl.files

            ctrl.globalComment = "";



            /*-------------------------------------------------------------------------------------------------------
                        Items
            */

            ctrl.removeElt = function (index) { ctrl.files.splice(index, 1) }

            /**
             * Ouverture input com et recupération de l'item selectionné
             */
           var itemSelected = null;
            ctrl.openInputCom = function (file) {


                itemSelected = file
                console.log (itemSelected)



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


            /*--------------------------------------------------------------------------------------------------------
                        validation upload
            */

            ctrl.removeAll = function () {
                clearScope()

            }




            ctrl.save = function () {
                if (InputControl.isValidCom(ctrl.globalComment)) {
                    for (file of ctrl.files) { file.comment.push(ctrl.globalComment) }
                }
                var data = { 'files': ctrl.files }

                UploadData.insertFiles(data).then(function successCallback(response) {
                    console.log(response.data)

                }, function errorCallback(response) { AjaxResponse.responseError(response) }
                );



                clearScope();

            }
            /*---------------------------------------------------------------------------------------
                fonctions utilitaires
            */

            function clearScope() {
                uploadCtrl.files = [];
                ctrl.comment = "";
            }

            ctrl.privateComment = ""
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
        }
    });