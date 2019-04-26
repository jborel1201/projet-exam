angular.
    module('galSmall').
    component('galSmall', {
        templateUrl: "views/components/gal-small/gal-small.template.html",
        controller: function smallController(Image, $scope) {

            var ctrl = this
            //récupération des datas
            ctrl.images = Image.query();

            // fonction d'affichage du menu
            ctrl.selectedImage = null;
            $scope.openMenu = function (event, image) {

                // Récupération des données de l'élément selectionné
                ctrl.selectedImage = image

                // Récupération des élements du DOM pour calcul des positions
                var menu = $('#menu-item');
                var menuArea = $('#menu-area');
                var menuAreaParent = $('#menu-area').parent();

                //Affichage du menu
                menu.removeClass("hidden");

                //position click souris
                let posX = event.pageX;
                let posY = event.pageY;
                //dimension du menu
                let menuWidth = menu.innerWidth();
                let menuHeight = menu.innerHeight();
                //offset top du container
                let areaOffsetTop = menuAreaParent[0].getBoundingClientRect().top;
                //max bordure droite
                let areaRight = menuArea[0].getBoundingClientRect().right;
                //Calcul de la position prévu du menu
                let menuTopPosition = posY - menuHeight;
                let menuRightPosition = posX + menuWidth;


                /*Vérification de la position droite du menu par rapport au bord droit de la div
                 et ajustement si depasse*/
                (menuRightPosition <= areaRight) ?
                    menu.css({
                        'left': posX + 'px'
                    }) :
                    menu.css({
                        'left': posX - (menuRightPosition - areaRight) + 'px'
                    });

                /*Vérification de la position haute du menu par rapport a l'offsetTop de la div
                et ajustement si depasse*/
                (menuTopPosition >= areaOffsetTop) ?
                    menu.css({
                        'top': posY - menuHeight + 'px'
                    }) :
                    menu.css({
                        'top': posY - menuHeight + (areaOffsetTop - menuTopPosition) + 'px'
                    });

                /*
                Ajustement de la position du menu lors du scroll
                */
                let topInit = menu.offset().top;
                $(menuAreaParent).scroll(function () {
                    menu.css({
                        'top': (topInit - (areaOffsetTop - menuArea[0].getBoundingClientRect().top)) + 'px'
                    });
                });

                /*
                annulation de la visibilité du menu lors du click sur un élément du DOM autre
                qu'une icone de menu
                */
                $(document).on('click', function () {
                    menu.addClass("hidden");
                });
            }
        }//ctrl
    });
