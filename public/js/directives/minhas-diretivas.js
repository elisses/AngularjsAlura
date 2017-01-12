angular.module('minhasDiretivas', [])
.directive('meuPainel', function(){

	var ddo = {};

	ddo.restric = "AE";

	ddo.scope ={
		titulo:'@titulo'
	}


	return ddo;
});