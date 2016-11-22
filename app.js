(function(){
	var app = angular.module('store', ['ngStorage', 'store-products', 'store-services']);
	
	app.controller('StoreController', ['$http', function($http){
		var store = this;
		$http.get('./data/products.json').success(function(data){
			store.products = data;
		});
	}]);
})();