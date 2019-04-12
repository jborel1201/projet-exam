angular.
    module('datasService').
    factory('UploadDatas', ['$http',
        function ($http) {
            method = {};

            method.getUploadFiles = function () {
                return $http({
                    method: 'GET',
                    url: 'controllers/upload.php',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8' }                 
                });
            }

            method.post = function (datas) {
                return $http({
                    method: 'POST',
                    url: 'controllers/upload.php',
                    data: datas,
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

                });
            }



            return method;

        }
    ]);
