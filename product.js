(function(){
	var app = angular.module('store-products', []);
	

	app.directive('panelBody', function(){
		return {
			restrict: 'E',
			templateUrl: 'panel-body.html'
		};
	});
	app.directive('productTitle', function(){
		return {
			restrict: 'E',
			templateUrl: 'product-title.html'
		};
	});
	app.directive('productPanels', function(){
		return {
			restrict: 'E',
			templateUrl: 'product-panels.html',
			controller:function(){
				this.tab=1;

				this.selectTab = function(setTab){
					this.tab = setTab;
				}
			},
			controllerAs:'panel'
		};
	});
})();