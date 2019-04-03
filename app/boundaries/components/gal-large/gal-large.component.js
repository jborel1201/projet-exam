angular.
    module('galLarge').
    component('galLarge', {
        templateUrl: "boundaries/components/gal-large/gal-large.template.html",
        controller: ['$scope', "$timeout", 'Image', function largeController($scope, $timeout,Image) {

            //recupération des datas du scope principal
            this.images = Image.query();
          


            // fonction de raffraichissement de la vue lors du drag and drop
            function updateData(index) {
                $scope.$apply(function () {
                    images.splice(index, 1)
                    objectData.images = images;
                    this.data = objectData
                });
            }



            $(function () {
                $timeout(function () {

                    $("#draggableContainer").selectable({
                        filter: "img",
                        selected: function (event, ui) {
                            console.log(ui)
                        }
                    })

                    $(".draggable").draggable({
                                revert: true,
                                snap: "#droppable"
                            });
                            $("#draggableContainer").delegate(".draggable", "dblclick", function () {
                            var imageName = $(this).find('img').attr('alt');
                            document.location.href = `#!/view/${imageName}`
                        });



                    $("#droppable").droppable({
                        drop: function (event, ui) {
                            var imgDrop = JSON.parse(ui.draggable.context.dataset.object);
                            //ajout de l'élément droppé à la liste des images deu scope principal
                            $scope.$parent.$parent.imagesDrop.push(imgDrop);
                            //récupération de l'index de l'élément et mise à jour de la liste d'images                   
                            let indexDrop = ui.draggable.context.dataset.index;
                            updateData(indexDrop);

                        }


                    });

                });

            });


        }


        ]
    });