angular.
    module('datasService').
    factory('Datas', ['$http',
        function ($http) {
            datas = {};

            datas.post = function (datas) {
                return $http({
                    method: 'POST',
                    url: 'controllers/test.php',
                    data: datas,
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

                }).then(function successCallback(response) {
                   
                }, function errorCallback(response) {
                });

            }

            return datas;

        }
    ]);
