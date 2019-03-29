<!DOCTYPE html>
<html lang="fr" ng-app="imgApp">

<head>

    <meta charset="UTF-8">

    <title>Images Php</title>


    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">


    <link rel="stylesheet" href="app.css">
    <link rel="stylesheet" href="../node_modules/bootswatch/dist/slate/bootstrap.css">




    <script src="lib/angular/angular.js"></script>
    <script src="lib/angular-route/angular-route.js"></script>
    <script src="lib/angular-resource/angular-resource.js"></script>
    <script src="lib/jquery/dist/jquery.min.js"></script>


    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>



    <script src="app.module.js"></script>
    <script src="app.config.js"></script>
    <script src="services/image.module.js"></script>
    <script src="services/image.service.js"></script>

    <script src="view/pages/menu/menu.module.js"></script>
    <script src="view/pages/menu/menu.component.js"></script>
    <script src="view/pages/galerie/galerie.module.js"></script>
    <script src="view/pages/galerie/galerie.component.js"></script>
    <script src="view/components/select-bar/select-bar.module.js"></script>
    <script src="view/components/select-bar/select-bar.component.js"></script>
    <script src="view/components/gal-list/gal-list.module.js"></script>
    <script src="view/components/gal-list/gal-list.component.js"></script>
    <script src="view/components/gal-large/gal-large.module.js"></script>
    <script src="view/components/gal-large/gal-large.component.js"></script>
    <script src="view/components/gal-medium/gal-medium.module.js"></script>
    <script src="view/components/gal-medium/gal-medium.component.js"></script>
    <script src="view/components/gal-small/gal-small.module.js"></script>
    <script src="view/components/gal-small/gal-small.component.js"></script>



    <script src="view/components/show-img/show-img.module.js"></script>
    <script src="view/components/show-img/show-img.component.js"></script>




</head>

<body>

    <!--<select-bar></select-bar>-->

    <div id="view" ng-view></div>


    <!--<div class="col-4" id="droppable">
        <ul>
            <li ng-repeat="image in imagesDrop">
                <p>
                    <img ng-src="{{image.url}}" alt="{{image.name}}">
                    {{image.name}}
                </p>
            </li>
        </ul>
    </div>-->




</body>

</html> 