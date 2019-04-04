angular.
    module('upload').
    component('upload', {

        templateUrl: "boundaries/views/upload/upload.html",
        controller: ['$scope', '$localStorage', function menuController($scope, $localStorage) {

           
            $scope.files = [];
            $scope.comment = ""; 
            var storage = $localStorage.upload? $localStorage.upload : []           
            var count = 0;

            

            /*
            TODO pouvoir changer le nom et supprimer un element
            */
            /* $scope.test = function (ev, file) {
 
                 let tdBefore = $(angular.element(ev.target))
 
                 let test = tdBefore.append(`<input value="${ev.target.innerText}"><i class="fas fa-check"></i><i class="fas fa-times"></i>`)
                 console.log(test)
                 console.log(file)
 
             }
 
             $scope.test2 = function (ev, file) {
                 console.log(ev)
                 console.log(file)
 
             }*/

            $scope.removeElt = function (index) {
                $scope.files.splice(index, 1)
                
            }

            $scope.removeAll = function () {
               clearScope();
            }

            $scope.save = function(){
              
                objUpload = {}
                objUpload.comment = $scope.comment;
                objUpload.datas = $scope.files;
                storage.push(objUpload)

                $localStorage.upload = storage;

                clearScope();

            }

            function clearScope(){
                $scope.files = [];
                $scope.comment = "";
            }

            /*/////////////////////////////////////////////////////////////
                                        UploadFiles
            *//////////////////////////////////////////////////////////////


            // modele objet file
            function uploadFile(name, size, type, date, src) {
                this.name = name;
                this.size = size;
                this.type = type;
                this.date = date;
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
                    data: filesTable,
                    success: function (data) {
                        console.log(data);
                    }
                });*/


            });
            
        }]//ctrl
    })