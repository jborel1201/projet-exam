angular.
    module('upload').
    component('upload', {

        templateUrl: "boundaries/views/upload/upload.html",
        controller: function uploadController($scope, InputControl, UploadData,AjaxResponse) {

            // init uploadController's variables on loading //
            const ctrl = this;
            ctrl.files = [];
             /// init counter's var ///
             ctrl.count = null;
             var countError = null;
             ctrl.numberOfUploadFiles = 0;
             ctrl.visible = false;

            //////////////////////////////////////////Upload////////////////////////////////////////////////         
            ///// init drag and drop and define behavior ///
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

            /**
             * ** file Object ***
             * @param {string} name 
             * @param {number} size 
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
             * callback foreach
             * @param {*} file//current file          
             */
            function readAndAddFile(file) {
                // instanciate a FileReader//
                let reader = new FileReader();
                //Read file if controls are Ok
                if (InputControl.isCorrectFileType(file.name)) {
                    reader.onload = function () {
                        // instantiate a file Object
                        fileRead = new uploadFile(file.name, file.size, file.type, this.result, []);
                    }
                    reader.readAsDataURL(file)//base64 encode
                    //trigger when read is finished
                    reader.onloadend = function () {
                        ctrl.count++;
                        //update files 
                        $scope.$apply(() => { ctrl.files.push(fileRead) })
                        //display counter when all files are loaded
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

            ////////////////////////////////////////////Upload-preview///////////////////////////////////////////////////
            //---------files list
            ctrl.removeElt = function (index) { ctrl.files.splice(index, 1) }

            var itemSelected = null;
            ctrl.openInputCom = function (file) {
                //get file
                itemSelected = file
                //display input com menu
                let menu = $('#private-com-input');
                menu.removeClass("hidden");
                //get mouse's position and width menu
                let posX = event.pageX;
                let posY = event.pageY;
                let menuWidth = menu.innerWidth();
                //set css position to input com
                menu.css({
                    'left': (posX - menuWidth) + 'px',
                    'top': posY + 'px'
                })
            }
            //---------Validation area
            // init var
            ctrl.globalComment = "";
            /**
             * reset var 
             */
            function clearScope() { ctrl.files = [] }
            // reset upload
            ctrl.removeAll = function () { clearScope() }

            // store data to database
            ctrl.save = function () {
                //check data entry
                if (InputControl.isValidCom(ctrl.globalComment)) {
                    for (file of ctrl.files) { file.comment.push(ctrl.globalComment) }
                }
                //use services to store data to database
                var data = { 'files': ctrl.files }
                UploadData.insertFiles(data).then(function successCallback(response) {
                    console.log(response.data)
                }, function errorCallback(response) { AjaxResponse.responseError(response) }
                );
                clearScope();
            }

            //////////////////////////////////Item comment window /////////////////////////////////

            // init var
            ctrl.privateComment = ""

            /**
             * close input comment and init var
             */
            function cleanInputMenu() {
                ctrl.privateComment = "";
                itemSelected = null;
                $('#private-com-input').addClass("hidden");
            }

            //cancel com creation
            ctrl.cancelCom = function () { cleanInputMenu() }
            //push comment within item's com array
            ctrl.addCom = function () {
                //check data entry
                if (InputControl.isValidCom(ctrl.privateComment)) {
                    itemSelected.comment.push(ctrl.privateComment)
                } else {
                    alert('Champs vide. Commentaire non Ajouté.');
                }
                cleanInputMenu();
            }
        }//ctrl
    })