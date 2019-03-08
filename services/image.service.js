angular.
    module('imageService').
    factory('Image', ['$resource',
        function ($resource) {
            return $resource('img/:imgName.json', {}, {
                query: {
                    method: 'GET',
                    params: { imgName: 'datas' },
                    isArray: true
                }
            });
        }
    ]);
