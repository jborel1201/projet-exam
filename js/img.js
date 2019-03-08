angular.module('imgApp', ['imgView'])
    /**.controller('imgListController', function imgListController($scope) {

        $scope.showPagination = true;
        //$scope.maxPagination = Math.ceil($scope.images.length / 6);
        var tablePagination = () => {
            let table = [];
            for (let i = 1; i <= $scope.maxPagination; i++) {
                table.push(i);
            }
            return table;
        };


        $scope.pagination = tablePagination();


        // Pagination
        var nbImgByPage = 6;
        $scope.activePagination = 2;
        $scope.paginationEvent = function (n) {
            console.log(n);
            $scope.activePagination = n;
            console.log($scope.activePagination);
            console.log($scope.maxPagination);
        }

    });*/