(function(){
	var app = angular.module('store', []);
	
	app.controller('StoreController', function(){
		this.products = gems;
	});

	/*app.controller("PanelController", function(){
		this.tab=1;

		this.selectTab = function(setTab){
			this.tab = setTab;
		}
	});*/
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
	/*var gem = {
		name: 'Dodecahedron',
		price: 2.95,
		description: 'Lorem Ipsum',
		url: 'img.gif',
		canPurchase: true,
		soldOut: false,
	}*/
	var gems = [
	{
		name: 'dodecahedron',
		price: 2.95,
		description: 'Lorem Ipsum',
		images: [{full: 'img.gif'},{thumb: 'img.gif'}],
		canPurchase: true,
		soldOut: false,
		reviews: [
			{
				stars: 4,
				body: "I love this gem!",
				author: "joe@thomas.com"
			},
			{
				stars: 5,
				body: "I love this gem!",
				author: "joe@thomas.com"
			},
			{
				stars: 1,
				body: "I love this gem!",
				author: "joe@thomas.com"
			}			
		]
	},
	{
		name: 'malachite',
		price: 19.13,
		description: 'Malachite, with its beautiful, rich green color, leaves no doubt of its importance as a jewel. Its opaque strength and power demands respect.',
		images: [{full: 'malachite.jpg'},{thumb: 'malachite.jpg'}],
		canPurchase: true,
		soldOut: false,
	},
	{
		name: 'titanium Cobalt',
		price: 119.55,
		description: 'This is Titanium Cobalt Blue Quartz Cluster. Titanium Quartz is natural quartz that has been heat infused with rare metals in a vacuum chamber.',
		images: [{full: 'cobalt.jpg'},{thumb: 'cobalt.jpg'}],
		canPurchase: true,
		soldOut: false,
	}]
})();