<!DOCTYPE html>
<html lang="fr" ng-app="imgApp">

<head>

	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Images Php</title>


	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">

	<link rel="stylesheet" href="../node_modules/bootswatch/dist/cerulean/bootstrap.css">
	<link rel="stylesheet" href="app.css">


	<script src="../node_modules/angular/angular.js"></script>
	<script src="../node_modules/angular-route/angular-route.js"></script>
	<script src="../node_modules/angular-resource/angular-resource.js"></script>
	<script src="../node_modules/jquery/dist/jquery.min.js"></script>
	<script src="../node_modules/ng-storage/ngStorage.js"></script>
	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

	<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>



	<!----------Import main module/routes-->
	<script src="app.module.js"></script>
	<script src="app.config.js"></script>
	<!----------Import pages----------------------------->
	<script src="views/views/menu/menu.module.js"></script>
	<script src="views/views/menu/menu.component.js"></script>
	<script src="views/views/galerie/galerie.module.js"></script>
	<script src="views/views/galerie/galerie.component.js"></script>
	<script src="views/views/upload/upload.module.js"></script>
	<script src="views/views/upload/upload.component.js"></script>
	<script src="views/views/manage/manage.module.js"></script>
	<script src="views/views/manage/manage.component.js"></script>
	<!----------Import composants------------------------------------------>
	<script src="views/components/select-bar/select-bar.module.js"></script>
	<script src="views/components/select-bar/select-bar.component.js"></script>
	<script src="views/components/gal-list/gal-list.module.js"></script>
	<script src="views/components/gal-list/gal-list.component.js"></script>
	<script src="views/components/gal-large/gal-large.module.js"></script>
	<script src="views/components/gal-large/gal-large.component.js"></script>
	<script src="views/components/gal-medium/gal-medium.module.js"></script>
	<script src="views/components/gal-medium/gal-medium.component.js"></script>
	<script src="views/components/gal-small/gal-small.module.js"></script>
	<script src="views/components/gal-small/gal-small.component.js"></script>
	<script src="views/components/side-menu/side-menu.module.js"></script>
	<script src="views/components/side-menu/side-menu.component.js"></script>
	<!----------Import services--------------------->
	<script src="services/image.module.js"></script>
	<script src="services/image.service.js"></script>
	<script src="services/datas/datas.module.js"></script>
	<script src="services/datas/datas.service.js"></script>
	<script src="services/utils/utils.module.js"></script>
	<script src="services/utils/utils.service.js"></script>


	<script src="views/components/show-img/show-img.module.js"></script>
	<script src="views/components/show-img/show-img.component.js"></script>




</head>

<body>

	<side-menu></side-menu>
	<div id="view" ng-view></div>
	
</body>

</html>