// public/js/services/NerdService.js
angular.module('nerdService', []).factory('Nerd', ['$http', function($http) {

  return {
    // call to get all nerds
    get : function() {
      return $http.get('/api/login');
    }

  }

}]);
