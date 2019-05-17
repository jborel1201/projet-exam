angular.
    module('utilsService').
    /**
     * retourne un objet de traitement des inputs
     */
    factory('InputControl', [
        function () {
            method = {};
            //extension's verifications
            method.isCorrectFileType = function (name) { 
                //split string into an array              
                let testDoubleExtension = name.split('.');
                //return boolean 
                return (/\.(jpe?g|png|gif)$/i.test(name) && testDoubleExtension.length == 2);
            }
            // input control
            method.isValidCom = function (com) {
                return !!com.trim()
            }

            return method;
        }
    ]).
    /**
     * retourne un objet de traitement des réponses Ajax
     */
    factory('AjaxResponse', ['$window',
        // inject $window. Used to return URL
        function ($window) {
            // create Object with methods
            method = {};
            // used to response error. Redirect to menu and display response error 
            method.responseError = function (response) {
                let url = `#!/?codeError=${response.status.toString()}&textError=${response.statusText}`
                return $window.location.href = url;
            }
            //for insert,update,delete response == 1 if ok, else => alert 
            method.alertDataTransfert = function (response) {
                if (response != 1) { return alert('Problème lors du transfert des données!') }
            }
            return method;
        }
    ])

