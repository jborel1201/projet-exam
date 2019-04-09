angular.
    module('datasService').
    factory('uploadDatas', ['$http',
        function ($http) {
            datas = {};

            datas.getUploadFiles = function () {
                return $http({
                    method: 'GET',
                    url: 'controllers/upload.php',                    

                }).then(function successCallback(response) {
                   
                }, function errorCallback(response) {
                });

            };

            datas.post = function (datas) {
                return $http({
                    method: 'POST',
                    url: 'controllers/test.php',
                    data: datas,
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

                }).then(function successCallback(response) {
                   
                }, function errorCallback(response) {
                });

            };



            return datas;

        }
    ]);
