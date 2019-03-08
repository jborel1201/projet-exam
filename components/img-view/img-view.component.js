angular.
    module('imgView').
    component('imgView', {
        templateUrl: "components/img-view/img-view.template.html",
        controller: function imgViewController() {            
            this.images = [
                { name: 'paysage1', url: 'img/paysage1.jpg' },
                { name: 'paysage2', url: 'img/paysage2.jpg' },
                { name: 'paysage3', url: 'img/paysage3.jpg' },
                { name: 'paysage4', url: 'img/paysage4.jpg' },
                { name: 'paysage5', url: 'img/paysage5.jpg' },
                { name: 'paysage6', url: 'img/paysage6.jpg' },
                { name: 'paysage7', url: 'img/paysage7.jpg' }
            ];

            this.col = 4;
            this.listView = false;

            // Affichage des images par taille
            this.modView = function modView(nb, bool) {
                this.col = nb;
                this.listView = bool;
                          
            };

        }

    });