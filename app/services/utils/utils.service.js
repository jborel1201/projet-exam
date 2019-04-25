angular.
    module('utilsService').
    factory('InputControl', [
        function () {
            method = {};

            method.isCorrectFileType = function (name) {
                let isOk = false
                let testDoubleExtension = name.split('.');
                if (/\.(jpe?g|png|gif)$/i.test(name) && testDoubleExtension.length == 2) {
                    isOk = true;
                }
                return isOk;
            }

            method.isValidCom = function (com) {
                let verif = true
                if (!com.trim()) {
                    verif = false;
                }
                return verif;
            }


            return method;

        }
    ]).
    factory('AjaxResponse', ['$window',
        function ($window) {
            method = {};

            method.responseError = function (response) {
                return $window.location.href = '#!/?codeError=' + response.status.toString() + '&textError=' + response.statusText;
            }

            method.alertDataTransfert = function(response) {
                if (response != 1) {
                    return alert('Problème lors du transfert des données!')
                }
            }

            return method;

        }
    ])

