
<!DOCTYPE html>
<html lang="fr" ng-app="imgApp">

<head>

    <meta charset="UTF-8">

    <title>Images</title>


    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">

    <link rel="stylesheet" href="css/app.css">




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

    <script src="view/components/select-bar/select-bar.module.js"></script>
    <script src="view/components/select-bar/select-bar.component.js"></script>
    <script src="view/components/img-view-list/img-view-list.module.js"></script>
    <script src="view/components/img-view-list/img-view-list.component.js"></script>
    <script src="view/components/img-view-gal-large/img-view-gal-large.module.js"></script>
    <script src="view/components/img-view-gal-large/img-view-gal-large.component.js"></script>
    <script src="view/components/img-view-gal-medium/img-view-gal-medium.module.js"></script>
    <script src="view/components/img-view-gal-medium/img-view-gal-medium.component.js"></script>
    <script src="view/components/img-view-gal-small/img-view-gal-small.module.js"></script>
    <script src="view/components/img-view-gal-small/img-view-gal-small.component.js"></script>



    <script src="view/components/show-img/show-img.module.js"></script>
    <script src="view/components/show-img/show-img.component.js"></script>




</head>

<body ng-controller="mainController">


    <div id="dropfile">Upload</div>


    <select-bar></select-bar>
    <div ng-view></div>


    <div class="col-4" id="droppable">
        <ul>
            <li ng-repeat="image in imagesDrop">
                <p>
                    <img ng-src="{{image.url}}" alt="{{image.name}}">
                    {{image.name}}
                </p>
            </li>
        </ul>
    </div>




</body>

</html> 