app.controller('FotosController', function($scope,$http){

	//$scope.fotos = [
		//{
			//titulo: 'Leão',
			//url:'http://www.fundosanimais.com/Minis/leoes.jpg'
		//},
		//{
		//	titulo: 'Leão2',
		//	url:'http://www.fundosanimais.com/Minis/leoes.jpg'
		//},
	//];

	$scope.fotos = [];

	$http.get('v1/fotos').success(function(fotos){
		$scope.fotos = fotos;
	})
	.error(function(erro){
		console.log(erro);
	})

	/*
	var promise = $http.get('v1/fotos');
	promise.then(function(retorno){
		$scope.fotos = retorno.data;
	}).catch(function(error){
		console.log(error);
	});
*/

});