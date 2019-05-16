angular.
    module('imageService').
    factory('Image', ['$resource',
        function ($resource) {
            return $resource('mockData/:imgName.json', {}, {
                query: {
                    method: 'GET',
                    params: { imgName: 'data' },
                    isArray: true
                }                
            });
            
        }
    ]);
