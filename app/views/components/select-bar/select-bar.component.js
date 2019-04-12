angular.
    module('selectBar').
    component('selectBar', {
        templateUrl: 'views/components/select-bar/select-bar.template.html',
        controller: function selectBarController() {


          
                /*/////////////////////////////////////////////////////////////
                                         UploadFiles
                *//////////////////////////////////////////////////////////////


                //Initialisation des évènements liés au Drag and Drop
                //au survol de la zone
                $(document).on('dragover', '#dragDropUpload', function(evt) {
                    evt.preventDefault();
                    evt.stopPropagation();
                    $(this).css({ 'background': '#FFFFFF', 'border': '#FFFFFF' });
                    return false;
                });
                // A la sortie de la zone sans Drop
                $(document).on('dragleave', '#dragDropUpload', function(evt) {
                    evt.preventDefault();
                    evt.stopPropagation();
                    $(this).css({ 'background': '#F8F9FA', 'border': 'white' });
                    return false;
                });

                //Au Drop des élements
                $(document).on('drop', '#dragDopUpload', function(evt) {
                    evt.preventDefault();
                    $(this).css({ 'background': '#FFFFFF', 'border': '#FFFFFF' });
                    return false;
                });


                // traitement des éléments lors du changement d'état de l'input 
                $(".inputFile").on('change', function() {

                  
                    var filesSelected = $(this).get(0).files; 
                    console.log(filesSelected)                  
                    let nbFiles = filesSelected.length;

                    if (nbFiles == 1) {
                        alert(nbFiles)
                    } else {
                        alert(nbFiles)
                        $(this).te
                    }

                    /*for (let i = 0; i < filesSelected.length; i++) {
                        let currentFile = filesSelected[i];
    
                        file = {};
    
                        file.name = currentFile.name;
                        file.type = currentFile.type;
                        file.size = currentFile.size;
                        file.uploadDate = new Date();
                        //filesUpload.push(file)
                        upload(currentFile)
    
                    }*/


                });

                /*
                            function upload(file) {
                
                
                                var reader = new FileReader();
                                reader.onloadend = handleReaderLoad;
                                reader.readAsDataURL(file);
                
                
                            }
                
                            function handleReaderLoad(evt) {
                                var pic = {};
                
                                pic.file = evt.target.result.split(',')[1];
                                var str = jQuery.param(pic);
                                file.data = evt.target.result;
                
                                //filesUpload.push(file)   
                                $scope.$apply(function () {
                                    $scope.imageUpload = file;
                                })
                
                                $("#imageUpload").removeClass("hidden")
                
                                console.log($scope.images)
                
                
                            }*/


            
        }//Ctrl
    });


