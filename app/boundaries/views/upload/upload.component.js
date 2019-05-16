angular.
    module('upload').
    component('upload', {

        templateUrl: "boundaries/views/upload/upload.html",
        controller: function uploadController($scope, InputControl) {

            var ctrl = this;
            ctrl.files = [];


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
                        $scope.$apply(() => {
                            ctrl.files.push(fileRead);
                        });
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
           
            //trigger when a file is added
            $("#input-files").on('change', function () {
                //init
                ctrl.files = [];
                ctrl.count = 0;
                countError = 0;
                ctrl.visible = true;

                var filesList = $(this).get(0).files;//get FileList Object

                ctrl.numberOfUploadFiles = filesList.length;
                //loop through FileList object 'filesList' with array prototype. readAndAddFile is callback 
                [].forEach.call(filesList, readAndAddFile);
                //reset input et show error
                $(this).val('');
                if (countError > 0) {
                    if (countError == 1) { alert(`${countError} fichier n'a pas été ajouté.\n Problème de format.`) }
                    else { alert(`${countError} fichiers n'ont pas été ajoutés.\n Problème de format.`) }
                }
            });

        }//ctrl
    })