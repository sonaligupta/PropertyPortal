// public/js/appRoutes.js
angular.module('approute', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider

  // home page
    .when('/home', {
      templateUrl: 'views/home.html',
      controller: 'homeController'
    })

    // login page that will use the loginController
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'loginController'
    });

  $locationProvider.html5Mode(true);

}]);
