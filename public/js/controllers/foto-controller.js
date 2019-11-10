angular.module('alurapic')
    .controller('FotoController', function ($scope, $routeParams, recursoFoto, cadastroDeFotos) {

        $scope.foto = {};
        $scope.messages = [];

        if ($routeParams.fotoId) {
            recursoFoto.get({ fotoId: $routeParams.fotoId },
                function (foto) {
                    $scope.foto = foto;
                },
                function (error) {
                    console.log(`Erro ao buscar foto: ${error}`);
                }
            );
        };

        $scope.submeter = () => {
            // inicializa mensagens
            $scope.messages.length = 0;

            // //verifica erros de input
            // if ($scope.formulario.titulo.$error.required) {
            //     $scope.messages.push({
            //         msg: 'Titulo é obrigatório',
            //         alerta: 'alert-danger'
            //     });
            // }
            // if ($scope.formulario.url.$error.required) {
            //     $scope.messages.push({
            //         msg: 'URL é obrigatória',
            //         alerta: 'alert-danger'
            //     });
            // }

            if (!$scope.messages.length) {
                cadastroDeFotos.cadastrar($scope.foto)
                .then(function(dados) {
                    $scope.messages.push(
                        {
                            msg: dados.mensagem,
                            alerta: 'alert-success'
                        })
                    if (dados.inclusao) $scope.foto = {};
                })
                .catch(function(erro) {
                    $scope.messages.push({
                        msg: erro.mensagem,
                        alerta: 'alert-warning'
                    })
                });
            }
        }

    });