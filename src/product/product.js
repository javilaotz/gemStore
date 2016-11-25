(function(){
	var app = angular.module('store-products', []);
	console.log(app);
	

	app.directive('panelBody', function(){
		return {
			restrict: 'E',
			templateUrl: './src/product/panel-body.html',
			controller: function($scope){
				$scope.option = "hola mundo";

				$scope.$on('msnTest', function(event, data){
					$scope.option = 'ok';
				});

				this.addToCart = function(product) {
					localStorageHandler.setPoduct(product);
				};
			},
			controllerAs: "title"
		};
	});
	app.directive('productTitle', function(){
		return {
			restrict: 'E',
			templateUrl: './src/product/product-title.html'
		};
	});
	app.directive('productPanels', function(){
		return {
			restrict: 'E',
			templateUrl: './src/product/product-panels.html',
			controller:function(){
				this.tab=1;

				this.selectTab = function(setTab){
					this.tab = setTab;
				}
			},
			controllerAs:'panel'
		};
	});

	app.filter('cutText', function(){
		return function(text){
			return text.substring(0, 200)+'...';
		}
	});
})();