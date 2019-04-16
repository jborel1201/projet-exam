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

            method.insertFiles = function (datas) {
                return $http({
                    method: 'POST',
                    url: 'controllers/upload.php',
                    data: datas,
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

                });
            }

            method.updateDocument = function (id, datas) {
                return $http({
                    method: 'PUT',
                    url: `controllers/upload.php?id=${id}`,
                    data: datas,
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                });
            }

            method.deleteDocument = function (id) {
                return $http({
                    method: 'DELETE',
                    url: `controllers/upload.php?id=${id}`,
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                });
            }

            return method;

        }
    ]).
    factory('GalleryDatas', ['$http',
        function ($http) {
            method = {};

            method.getFilesInGallery = function () {
                return $http({
                    method: 'GET',
                    url: 'controllers/gallery.php',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8' }
                });
            }

            method.insertFilesInGallery = function (datas) {
                return $http({
                    method: 'POST',
                    url: 'controllers/gallery.php',
                    data: datas,
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

                });
            }

            return method;

        }
    ])

