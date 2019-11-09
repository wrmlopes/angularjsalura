angular.module('alurapic').controller('FotosController', function($scope, $http) {
	
	$http.get('v1/fotos')
		.success(retorno=>{
			$scope.fotos=retorno;
		})
		.error(error=>{
			console.log(error);
		})
});