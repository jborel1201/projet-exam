<!DOCTYPE html>
<html lang="fr" ng-app="imgApp">

<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Images Php</title>


    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">

    <link rel="stylesheet" href="../node_modules/bootswatch/dist/slate/bootstrap.css">
    <link rel="stylesheet" href="app.css">





    <script src="lib/angular/angular.js"></script>
    <script src="lib/angular-route/angular-route.js"></script>
    <script src="lib/angular-resource/angular-resource.js"></script>
    <script src="lib/jquery/dist/jquery.min.js"></script>


    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>


    <!----------Import main module/routes-->
    <script src="app.module.js"></script>
    <script src="app.config.js"></script>
    <!----------Import pages----------------------------->
    <script src="boundaries/views/menu/menu.module.js"></script>
    <script src="boundaries/views/menu/menu.component.js"></script>
    <script src="boundaries/views/galerie/galerie.module.js"></script>
    <script src="boundaries/views/galerie/galerie.component.js"></script>
    <script src="boundaries/views/upload/upload.module.js"></script>
    <script src="boundaries/views/upload/upload.component.js"></script>
    <!----------Import composants------------------------------------------>
    <script src="boundaries/components/select-bar/select-bar.module.js"></script>
    <script src="boundaries/components/select-bar/select-bar.component.js"></script>
    <script src="boundaries/components/gal-list/gal-list.module.js"></script>
    <script src="boundaries/components/gal-list/gal-list.component.js"></script>
    <script src="boundaries/components/gal-large/gal-large.module.js"></script>
    <script src="boundaries/components/gal-large/gal-large.component.js"></script>
    <script src="boundaries/components/gal-medium/gal-medium.module.js"></script>
    <script src="boundaries/components/gal-medium/gal-medium.component.js"></script>
    <script src="boundaries/components/gal-small/gal-small.module.js"></script>
    <script src="boundaries/components/gal-small/gal-small.component.js"></script>
    <!----------Import services--------------------->
    <script src="services/image.module.js"></script>
    <script src="services/image.service.js"></script>


    <script src="boundaries/components/show-img/show-img.module.js"></script>
    <script src="boundaries/components/show-img/show-img.component.js"></script>




</head>

<body>

    <div id="view" ng-view></div>

</body>

</html> 