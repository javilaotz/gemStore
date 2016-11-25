(function(){
	var app = angular.module('store', ['ngStorage', 'store-products', 'store-services', 'ngRoute']);

	app.constant('configTmdb', {
		apiUri: 'https://api.themoviedb.org/3/',
		apiKey: '1dd8fef1dd869e4fe9b1825a7a582965'
	});

	app.config(['$routeProvider', function config($routeProvider){
		$routeProvider.when('/', {templateUrl: 'src/templates/dashboard.html', controller:'StoreController', controllerAs:'store'});
		$routeProvider.when('/product/:id', {templateUrl: 'src/templates/detail.html', controller:'DetailController', controllerAs:'store'});
		$routeProvider.otherwise('/');
	}]);

	app.controller('DetailController', ['localStorageHandler', 'dataStorage', '$scope', '$routeParams', '$location', 'tmdb', '$timeout', function(localStorageHandler, dataStorage, $scope, $routeParams, $location, tmdb, $timeout){
		$scope.test = '';
		console.log($routeParams['id']);

		var timeoutSearch = "";

		$scope.$watch('test', function(newSearch, oldSearch){
			if (timeoutSearch) {
				$timeout.cancel(timeoutSearch);
			}
			timeoutSearch = $timeout(function(){
				$scope.executeSearch();
			}, 2000);
		});

		$scope.executeSearch = function(){
			console.log('Ejecutando busqueda...');
			console.log($scope.test);
		}

		$scope.goDashboard = function(){
			location.path('/');
		}

		$scope.getPopularMovies = function(){
			var moviesPopular = tmdb.getPopular('movie/popular', '&language=es-ES');
			moviesPopular.then(function(data){
				console.log(data.data);
				$scope.moviesPopular = data.dataa;
			}, function(error){
				console.log('error en el request');
				console.log(error);
			});
			console.log(moviesPopular);
		}

		$scope.getAllMovies = function() {
			var getAll = tmdb.getAll();
			getAll.then(function(data){
				console.log(data);
			})
		}

		
	}]);

	app.run(function ($rootScope) {
		//rootScope: se puede acceder desde cualquier parte de la aplicacion
		//scope: está limitado a la directiva
		$rootScope.$on('$routeChangeStart', function(event, next, current) {
			console.log('$routeChangeStart');
			console.log(event);
			console.log(next);
			console.log(current);
		});
		$rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
			console.log('$routeChangeSuccess');
			console.log(event);
			console.log(current);
			console.log(previous);
		});
		$rootScope.$on('$routeChangeError', function(event, current, previous, rejection) {
			console.log('$routeChangeError');
			console.log(event);
			console.log(current);
			console.log(previous);
			console.log(rejection);
		});
	});
	
	app.controller('StoreController', ['$http', '$scope', function($http, $scope){
		var store = this;
		$http.get('./data/products.json').success(function(data){
			store.products = data;
		});

		store.sentMsn = function(){
			$scope.$broadcast('msnTest', {test: "ok"});
		}
	}]);
})();

//Aqui va la logica del negocio