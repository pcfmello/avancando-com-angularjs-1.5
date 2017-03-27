require('angular');

// CRIANDO O MÓDULO DO ANGULARJS
angular.module('app',[]);

angular.module('app').controller('MainController', function($scope) {
    $scope.name = "Evoluindo com AngularJS 1.5";
});