angular.
    module('manage').
    component('manage', {

        templateUrl: "views/views/manage/manage.html",
        controller: function manageController($localStorage, $http, UploadDatas) {

            self = this;

            self.storage = [];
            self.datas = [];
            self.date = null;
            self.comment = null;
            self.id = null;
            self.indexActif = null;


            //Récupération des données de la Bd
            UploadDatas.getUploadFiles().then(function successCallback(response) {
                self.storage = response.data;
            }, function errorCallback(response) {
                alert(response)
            });

            //Fonction d'ouverture d'un dossier. 
            this.openFolder = function (folder, index) {
                self.comment = folder.comment;
                self.date = folder.date;
                self.id = folder.id.$oid;
                self.datas = folder.datas;
                self.indexActif = index + 1;
            }

            var validItem = null;
            var imgOfElementDrag = null
            this.startDrag = function (event,data) {
                angular.element(event.target).addClass('draggable')
                validItem = data;
                imgOfElementDrag = data.src;

                $('.draggable').on('click', function () {
                    console.log('test')
                })
    
                //Configuration du Draggable
                ////////////////////////////
                $('.draggable').draggable({
                    revert: true,
                    snap: "#drop",
                    cursorAt: { left: 0, top: 0, bottom: 80, right: 80 },
    
                    helper: function () {
    
                        var bloc = $("<div class='cloneImgDrop'></div>")
                        bloc.append(`<img src="${imgOfElementDrag}">`)
    
                        return bloc
                    }
    
                });
            }

            /* this.deleteDocument = function (id){
                 UploadDatas.deleteDocument(id).then(function successCallback(response) {
                     console.log(response.data)
                 }, function errorCallback(response) {
                     alert(response)
                 });
              
             }*/



            $('.draggable').on('click', function () {
                console.log('test')
            })

            //Configuration du Draggable
            ////////////////////////////
            $('.draggable').draggable({
                revert: true,
                snap: "#drop",
                cursorAt: { left: 0, top: 0, bottom: 80, right: 80 },

                helper: function () {

                    var bloc = $("<div class='cloneImgDrop'></div>")
                    bloc.append(`<img src="${imgOfElementDrag}">`)

                    return bloc
                }

            });

            //Configuration du Droppable
            ////////////////////////////            
            $("#delete-area").droppable({
                drop: () => {

                    /* // Récuperation des élements de la drop zone                      
                     dropAreaImgList = $scope.dropAreaContent;
 
                     //Selection des éléments à ajouter dans la drop zone
                     var elementsDropInImages = []
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
 
                     });*/


                    $scope.$apply(function () {
                        dragElementsList.forEach((element) => {
                            $scope.dropAreaContent.push(element);
                            $scope.images.splice($scope.images.indexOf(element), 1)

                        })


                    })

                    dragElementsList = [];

                }


            });




        }
    });