angular.
    module('galList').
    component('galList', {
        templateUrl: "boundaries/components/gal-list/gal-list.template.html",
        controller: ['$scope','Image', function listController($scope,Image) {

          
            this.images = Image.query();

            // fonction de raffraichissement de la vue lors du drag and drop
            function updateData(index) {
                $scope.$apply(function () {
                    recupImages.splice(index, 1);
                    this.images = recupImages;
                });
            }

            $(function () {
                $("#draggableContainer")
                    .delegate(".draggable", "mouseover", function () {
                        $(this).css("cursor", "move").draggable({
                            revert: true,
                            snap: "#droppable"
                        });
                    })
                    .delegate(".draggable", "dblclick", function () {

                        var objectImage = JSON.parse($(this).context.dataset.object);
                        document.location.href = `#!/view/${objectImage.name}`
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

               
                    
                   

            })
        }]
    });