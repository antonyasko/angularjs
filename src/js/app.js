const app = angular.module('angularJSApp', ['ngRoute']);

app.config([
  '$routeProvider',
  function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
      })
      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl',
      });
  },
]);

app.factory('searchValue', function () {
  return {
    value: 'hello world',
  };
});
