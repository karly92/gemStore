(function(){
//Modulo de Angular.js que se ejecutará dentro de mi codigo html
	var app = angular.module('store',[]);
	app.controller('StoreController',function(){
		this.products = gems;

	});

	app.controller("PanelController",function(){
		this.tab = 1;

		this.selectTab = function(setTab){
			this.tab = setTab;
		};
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	})

	var gems =[ 
	{
		name: 'Dodecahedron',
		price: 2,
		description: '. . .',
		images: [
			{
				full: 'img/cupcake1.jpg',
				thumb: 'img/cupcake1_thumbnail.jpg'
			},
			{
				full: 'img/cupcake2.jpg',
				thumb: 'img/cupcake2_thumbnail.jpg'
			},
		],
		canPurchase: true,
		soldOut: false,
	},
	{
		name: 'Pentagonal Gem',
		price: 5.95,
		description: '. . .',
		images: [
			{
				full: 'img/cupcake2.jpg',
				thumb: 'img/cupcake2_thumbnail.jpg'
			},
			{
				full: 'img/cupcake1.jpg',
				thumb: 'img/cupcake1_thumbnail.jpg'
			},
		],
		canPurchase: false,
		soldOut: false,
	}
];


})();