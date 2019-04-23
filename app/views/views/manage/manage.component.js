angular.
    module('manage').
    component('manage', {

        templateUrl: "views/views/manage/manage.html",
        controller: function manageController($timeout, UploadDatas, $route) {

            self = this;

            self.storage = [];
            self.datas = [];
            self.date = null;
            self.comment = null;
            self.id = null;
            self.indexActif = null;


            self.drag = function (e) {
                console.log(e)
            }

            //Récupération des données de la Bd
            UploadDatas.getUploadFiles().then(function successCallback(response) {
                self.storage = response.data;
            }, function errorCallback(response) {
                alert(response)
            });

            //Fonction d'ouverture d'un dossier. 
            this.openFolder = function (folder, index) {
                self.date = folder.dateUpload;
                self.id = folder.id.$oid;
                self.datas = folder.datas;
                self.indexActif = index + 1;
                test();
            }


            this.showComment = function (data) {
                self.comment = data;
                $('#comment').removeClass('hidden')
            }



            this.deleteElement = function (data) {
                UpdateUploadBd(data);
                
            }


            function UpdateUploadBd(data){
                let id = self.id;

                if (self.datas.length == 1) {

                    UploadDatas.deleteDocument(id).then(function successCallback(response) {
                        console.log(response.data);
                    }, function errorCallback(response) {
                        alert(response)
                    });
                    $route.reload();

                } else {

                    self.datas.splice(self.datas.indexOf(data), 1)

                    UploadDatas.updateDocument(id, { 'files': self.datas }).then(function successCallback(response) {
                        console.log(response.data)
                    }, function errorCallback(response) {
                        alert(response)
                    });
                }
            }


            var elementDrag = null
            var imgOfElementDrag = null;
            self.startDrag = (data) => {
                elementDrag = data;

                imgOfElementDrag = elementDrag.src;

            }

            test = function () {
                $timeout(function () {


                    $('.draggable').draggable({
                        revert: true,
                        snap: ".droppable",
                        cursorAt: { left: 0, top: 0, bottom: 40, right: 40 },

                        helper: function () {

                            var bloc = $("<div class='cloneImgDrop'></div>");

                            bloc.append(`<img src="${imgOfElementDrag}">`);

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
                    console.log(elementDrag)
                    UpdateUploadBd(elementDrag);
                    //Récuperation des élements de la drop zone                      
                    //dropAreaImgList = $scope.dropAreaContent;

                    //Selection des éléments à ajouter dans la drop zone
                    /*var elementsDropInImages = []
                    for (i = 0; i < dragElementsList.length; i++) {
                        elementsDropInImages.push($scope.images[dragElementsList[i].index])
                        dropAreaImgList.push(dragElementsList[i]);
                    }
                    // mise à jours de la vue
                    $scope.$apply(function () {
                        for (i = 0; i < elementsDropInImages.length; i++) {
                            let index = $scope.images.indexOf(elementsDropInImages[i])
                            $scope.images.splice(index, 1)
                        }

                        $scope.dropAreaContent = dropAreaImgList;

                    });


                    /*$scope.$apply(function () {
                        dragElementsList.forEach((element) => {
                            $scope.dropAreaContent.push(element);
                            $scope.images.splice($scope.images.indexOf(element), 1)
 
                        })
 
 
                    })*/

                    //dragElementsList = [];

                }

            })

        }
    });