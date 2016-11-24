(function(){
	var app = angular.module('store-services', []);
	
	app.service('localStorageHandler', ['$localStorage', function($localStorage){
		return {
			setProduct: function(product) {
				var products = ($localStorage.products) ? $localStorage.products : [];
				products.push(products);
				$localStorage.products = products;
			},
			getProducts: function() {
				return $localStorage.products;
			},
			removeProduct: function(index) {
				$localStorage.products.splice(index, 1);
			}
		}
	}]);

	app.service('tmdb', ['$http', 'configTmdb', '$q', function($http, configTmdb, $q){
		return {
			getPopular: function(uri, params) {
				console.log(configTmdb);
				//return $http.get(configTmdb.apiUri+uri+'?api_key='+configTmdb.apiKey+params);
			},

			getAll: function() {
				var defer = $q.defer();
				var endpoints = ['movie/popular', 'genre/tv/list', 'genre/movie/list'];

				var promises = endpoints.map( function (uri) {
					return $http.get(configTmdb.apiUri+uri+'?api_key='+configTmdb.apiKey+'&language=es-ES');
				});
				defer.resolve({message: 'ok'});
				//defer.reject({message: 'not ok, please review your stuff'});
				return $q.all(promises);
			}
		}
	}]);

	app.service('dataStorage', ['$http', function(){

	}]);
})();

//aquí van las herramientas que serán necesarias para queel controlador funcionen