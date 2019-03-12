angular.
    module('imageService').
    factory('Image', ['$resource',
        function ($resource) {
            return $resource('datas/:imgName.json', {}, {
                query: {
                    method: 'GET',
                    params: { imgName: 'images' },
                    isArray: true
                }                
            });
            
        }
    ]);
