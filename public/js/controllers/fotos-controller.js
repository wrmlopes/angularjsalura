angular.module('alurapic').controller('FotosController', function($scope, recursoFoto) {
	
	$scope.fotos = [];
	$scope.filtro = '';
	
	recursoFoto.query(
		function(fotos){
			$scope.fotos=fotos;
		},
		function(error){
			console.log(error);	
		}
	);

	$scope.remover = foto => {
		recursoFoto.delete({fotoId:foto._id},
			function(){
				let indice = $scope.fotos.indexOf(foto);
				$scope.fotos.splice(indice,1);
				console.log('Foto removida com sucesso !!!');
			},
			function(error){
				console.log(`Erro ao remover foto: ${error}`);
			});
	}
});