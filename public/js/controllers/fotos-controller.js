angular.module('alurapic').controller('FotosController', function($scope, $http) {
	
	$scope.fotos = [];
	$scope.filtro = '';
	
	$http.get('v1/fotos')
		.success(retorno=>{
			$scope.fotos=retorno;
		})
		.error(error=>{
			console.log(error);
		})
});