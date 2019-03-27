angular.module('imgApp', [
    'ngRoute',
    'selectBar',
    'imgViewList',
    'imgViewGalSmall',
    'imgViewGalMedium',
    'imgViewGalLarge',
    'showImg',
    'imageService'

])
    .controller("mainController", ["$scope", "$http", "Image", function ($scope, $http, Image) {

        $scope.images = Image.query();


        $scope.imagesDrop = [];

        $(function () {

            $(document).on('dragenter', '#dropfile', function () {
                $(this).css('background', '#f0f0f5');
                return false;
            });

            $(document).on('dragover', '#dropfile', function (e) {
                e.preventDefault();
                e.stopPropagation();
                $(this).css('background', '#f0f0f5');
                return false;
            });

            $(document).on('dragleave', '#dropfile', function (e) {
                e.preventDefault();
                e.stopPropagation();
                $(this).css('border', '3px dashed #BBBBBB');
                return false;
            });

            $(document).on('drop', '#dropfile', function (e) {
                if (e.originalEvent.dataTransfer) {
                    if (e.originalEvent.dataTransfer.files.length) {
                        // Stop the propagation of the event
                        e.preventDefault();
                        e.stopPropagation();
                        $(this).css('border', '3px dashed #BBBBBB').css('background','#FFFFFF');
                        // Main function to upload
                        upload(e.originalEvent.dataTransfer.files);
                    }
                }
                else {
                    $(this).css('border', '3px dashed #BBBBBB');
                }
                return false;
            });

            function upload(files) {
                var f = files[0];

                // Only process image files.
                if (!f.type.match('image/jpeg')) {
                    alert('The file must be a jpeg image');
                    return false;
                }
                var reader = new FileReader();

                // When the image is loaded,
                // run handleReaderLoad function
                reader.onload = handleReaderLoad;

                // Read in the image file as a data URL.
                reader.readAsDataURL(f);
                console.log(f)                
            }

            function testPhp() {

                $http({
                    method: 'post',
                    url: '/php/updatejson.php',                  

                }).then(function successCallback(response) {
                    console.log(response)
                }, function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });
            }

            function handleReaderLoad(evt) {
                var pic = {};
                pic.file = evt.target.result.split(',')[1];

                var str = jQuery.param(pic);
                
                //testPhp();
                /*$.ajax({
                    type: 'POST',
                    url: 'php/updateson.php',
                    data: str,
                    success: function (data) {
                        do_something(data);
                    }
                });
                
                $http.get('/php/updateJson.php', str).then(function successCallback(data) {
                    console.log(data);
                }, function errorCallback() {
                    console.log('erreur');
                });*/


            }

        });

    }]);