

angular.
    module('navbarUpload').
    component('navbarUpload', {
        templateUrl: 'view/components/navbar-upload/navbar-upload.template.html',
        controller: ['$scope', 'FilesUpload', function selectBarController($scope, FilesUpload) {




            /*/////////////////////////////////////////////////////////////
                                     UploadFiles
            *//////////////////////////////////////////////////////////////

            function uploadFile(name, size, type, date, src) {
                this.name = name;
                this.size = size;
                this.type = type;
                this.date = date;
                this.src = src
            }


            function readAndPreview(file) {

                var reader = new FileReader();


                reader.addEventListener("load", function () {

                    console.log(file)

                    /*objFile = {}
                    objFile.name = file.name;
                    objFile.size = file.size;
                    objFile.type = file.type;
                    objFile.date = new Date();
                    objFile.src = this.result*/
                    FilesUpload.filesUpload.push(new uploadFile(file.name, file.size, file.type, new Date(), this.result))

                }, false);
                reader.readAsDataURL(file);

            }

            //Initialisation des évènements liés au Drag and Drop
            //au survol de la zone
            $(document).on('dragover', '#dragDropUpload', function (evt) {
                evt.preventDefault();
                evt.stopPropagation();
                $(this).css({ 'background': '#FFFFFF', 'border': '#FFFFFF' });
                return false;
            });
            // A la sortie de la zone sans Drop
            $(document).on('dragleave', '#dragDropUpload', function (evt) {
                evt.preventDefault();
                evt.stopPropagation();
                $(this).css({ 'background': '#F8F9FA', 'border': 'white' });
                return false;
            });

            //Au Drop des élements
            $(document).on('drop', '#dragDopUpload', function (evt) {
                evt.preventDefault();
                $(this).css({ 'background': '#FFFFFF', 'border': '#FFFFFF' });
                return false;
            });


            // traitement des éléments lors du changement d'état de l'input 
            $(".inputFile").on('change', function () {


                var files = $(this).get(0).files;
                filesUploadList = [];

                [].forEach.call(files, readAndPreview);

                $scope.filesUpload = FilesUpload.filesUpload

            });

        }]//Ctrl

    })
    .service('FilesUpload', function () {
        return { filesUpload: [] }
    })


