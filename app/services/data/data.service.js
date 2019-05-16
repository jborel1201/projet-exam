angular.
    module('dataService').
    factory('UploadData', ['$http',
        function ($http) {
            method = {};

            method.getUploadFiles = function () {
                return $http({
                    method: 'GET',
                    url: 'controls/upload.php',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8' }
                });
            }

            method.insertFiles = function (data) {
                return $http({
                    method: 'POST',
                    url: 'controls/upload.php',
                    data: data,
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

                });
            }

            method.updateDocument = function (id, data) {
                return $http({
                    method: 'PUT',
                    url: `controls/upload.php?id=${id}`,
                    data: data,
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                });
            }

            method.deleteDocument = function (id) {
                return $http({
                    method: 'DELETE',
                    url: `controls/upload.php?id=${id}`,
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                });
            }

            return method;

        }
    ]).
    factory('GalleryData', ['$http',
        function ($http) {
            method = {};

            method.getFilesInGallery = function () {
                return $http({
                    method: 'GET',
                    url: 'controls/gallery.php',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8' }
                });
            }

            method.insertFilesInGallery = function (data) {
                return $http({
                    method: 'POST',
                    url: 'controls/gallery.php',
                    data: data,
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

                });
            }

            return method;

        }
    ])

