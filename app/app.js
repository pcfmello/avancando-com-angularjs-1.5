/**
 * @project  avancando-com-angularjs-1.5
 * @class    App
 * @category Modules
 * @author   Paulo Cesar Ferreira de Mello <pcfmello@gmail.com>
 * @since    08/04/17
 * @ide      WebStorm IDE
 */

// IMPORTANDO O ANGULARJS
require('angular');

// IMPORTANDO O CONTROLLER
var MainController = require('./controllers/MainController');

// CRIANDO O MÓDULO
angular.module('app',[]);

// REGISTRANDO CONTROLLERS E SUAS DEPENDENCIAS
angular.module('app').controller('MainController', ['$scope', MainController]);