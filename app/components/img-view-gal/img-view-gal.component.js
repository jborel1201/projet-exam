angular.
    module('imgViewGal').
    component('imgViewGal', {
        templateUrl: "components/img-view-gal/img-view-gal.template.html",
        controller: ['$routeParams', 'Image', '$scope', function imgViewController($routeParams, Image, $scope) {


            var listDrop = [];
            var images = [
                { "name": "paysage1", "url": "datas/img/paysage1.jpg" }, { "name": "paysage2", "url": "datas/img/paysage2.jpg" },
                { "name": "paysage3", "url": "datas/img/paysage3.jpg" }, { "name": "paysage4", "url": "datas/img/paysage4.jpg" },
                { "name": "paysage5", "url": "datas/img/paysage5.jpg" }, { "name": "paysage6", "url": "datas/img/paysage6.jpg" },
                { "name": "paysage7", "url": "datas/img/paysage7.jpg" }, { "name": "paysage8", "url": "datas/img/paysage8.jpg" },
                { "name": "paysage9", "url": "datas/img/paysage9.jpg" }, { "name": "paysage10", "url": "datas/img/paysage10.jpg" },
                { "name": "paysage11", "url": "datas/img/paysage11.jpg" }, { "name": "paysage12", "url": "datas/img/paysage12.jpg" },
                { "name": "paysage13", "url": "datas/img/paysage13.jpg" }, { "name": "paysage14", "url": "datas/img/paysage14.jpg" },
                { "name": "paysage15", "url": "datas/img/paysage15.jpg" }, { "name": "paysage16", "url": "datas/img/paysage16.jpg" },
                { "name": "paysage17", "url": "datas/img/paysage17.jpg" }, { "name": "paysage18", "url": "datas/img/paysage18.jpg" },
                { "name": "paysage19", "url": "datas/img/paysage19.jpg" }, { "name": "paysage20", "url": "datas/img/paysage20.jpg" },
                { "name": "paysage21", "url": "datas/img/paysage21.jpg" }, { "name": "paysage22", "url": "datas/img/paysage22.jpg" },
                { "name": "paysage23", "url": "datas/img/paysage23.jpg" }, { "name": "paysage24", "url": "datas/img/paysage24.jpg" },
                { "name": "paysage25", "url": "datas/img/paysage25.jpg" }, { "name": "paysage26", "url": "datas/img/paysage26.jpg" },
                { "name": "paysage27", "url": "datas/img/paysage27.jpg" }, { "name": "paysage28", "url": "datas/img/paysage28.jpg" },
                { "name": "paysage29", "url": "datas/img/paysage29.jpg" }, { "name": "paysage30", "url": "datas/img/paysage30.jpg" },
                { "name": "paysage31", "url": "datas/img/paysage31.jpg" }, { "name": "paysage32", "url": "datas/img/paysage32.jpg" },
                { "name": "paysage33", "url": "datas/img/paysage33.jpg" }, { "name": "paysage34", "url": "datas/img/paysage34.jpg" },
                { "name": "paysage35", "url": "datas/img/paysage35.jpg" }, { "name": "paysage36", "url": "datas/img/paysage36.jpg" },
                { "name": "paysage37", "url": "datas/img/paysage37.jpg" }, { "name": "paysage38", "url": "datas/img/paysage38.jpg" },
                { "name": "paysage39", "url": "datas/img/paysage39.jpg" }, { "name": "paysage40", "url": "datas/img/paysage40.jpg" }
            ]
            var col = $routeParams.nb;            

            //création de l'objet contenant les datas a injecter à la vue
            var objectData = {};
            objectData.images = images;
            objectData.col = col;

            //Affectation de l'objet à la variable lié à la vue
            this.data = objectData;

           
            // fonction de raffraichissement de la vue lors du drag and drop
            function updateData(index) {                
                $scope.$apply(function () {                    
                    images.splice(index,1)                    
                    objectData.images = images;
                    this.data = objectData
                });
            }



            console.log($scope.$parent.$parent)
            $("#draggableContainer")
                .delegate(".draggable", "mouseover", function () {
                    $(this).css("cursor", "move").draggable({
                        refreshPositions: true
                    });
                })
                .delegate(".draggable", "dblclick", function () {
                   //console.log($(this).context.firstElementChild.dataset.object)
                    var imageName = $(this).context.firstElementChild.alt;
                    document.location.href = `#!/view/${imageName}`
                });

            $("#droppable").droppable({
                drop: function (event, ui) {
                    var imgDrop = JSON.parse(ui.draggable.context.firstElementChild.dataset.object);
                    $scope.$parent.$parent.imagesDrop.push(imgDrop);
                    console.log($scope.$parent.$parent);
                    let indexDrop = ui.draggable.context.firstElementChild.dataset.index;
                    console.log(indexDrop);
                    updateData(indexDrop);
                    
                }
            });



        }


        ]
    });
