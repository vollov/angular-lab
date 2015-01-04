

angular.module('sportsControllers',[])
//.constant("dataUrl", "http://localhost:2403/products")
.controller('sportsStoreCtrl',['$scope', '$rootScope', '$http',
				function($scope, $rootScope, $http) {
//	$scope.data = {
//			products: [
//			{ name: "Product #1", description: "A product",
//			category: "Category #1", price: 100 },
//			{ name: "Product #2", description: "A product",
//			category: "Category #1", price: 110 },
//			{ name: "Product #3", description: "A product",
//			category: "Category #2", price: 210 },
//			{ name: "Product #4", description: "A product",
//			category: "Category #3", price: 202 }]
//	};
	

	$scope.data = {};
	

	
	$http.get("http://localhost:8800/api/products").success(function(data) {
		$scope.data.products = data;
	}).error(function(error) {
		$scope.data.error = error;
	});
	
}])
.constant("productListActiveClass", "btn-primary")
.constant("productListPageCount", 3)
.controller("productListCtrl", function ($scope, $filter, productListActiveClass, productListPageCount, CartService) {
	var selectedCategory = null;
	
	$scope.selectedPage = 1;
	$scope.pageSize = productListPageCount;
	
	$scope.selectCategory = function(newCategory) {
		selectedCategory = newCategory;
		$scope.selectedPage = 1;
	}
	
	$scope.selectPage = function (newPage) {
		$scope.selectedPage = newPage;
	}
	
	$scope.categoryFilterFn = function(product) {
		return selectedCategory == null
				|| product.category == selectedCategory;
	}
	
	$scope.getCategoryClass = function (category) {
		return selectedCategory == category ? productListActiveClass : "";
	}
	
	$scope.getPageClass = function (page) {
		return $scope.selectedPage == page ? productListActiveClass : "";
	}
	
	$scope.addProductToCart = function (product) {
		CartService.addProduct(product.id, product.name, product.price);
	}
});