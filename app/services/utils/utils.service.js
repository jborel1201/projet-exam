angular.
    module('utilsService').
    /**
     * retourne un objet de traitement des inputs
     */
    factory('InputControl', [
        function () {
            method = {};
            //Vérification la conformité du fichier à uploader
            method.isCorrectFileType = function (name) {               
                let testDoubleExtension = name.split('.');
                return (/\.(jpe?g|png|gif)$/i.test(name) && testDoubleExtension.length == 2);
            }
            // vérification de la saisie du commentaire
            method.isValidCom = function (com) {
                return com.trim()
            }

            return method;
        }
    ]).
    /**
     * retourne un objet de traitement des réponses Ajax
     */
    factory('AjaxResponse', ['$window',
        function ($window) {
            method = {};

            method.responseError = function (response) {
                let url = `#!/?codeError=${response.status.toString()}&textError=${response.statusText}`
                return $window.location.href = url;
            }

            method.alertDataTransfert = function (response) {

                if (response != 1) { return alert('Problème lors du transfert des données!') }

            }

            return method;

        }
    ])

