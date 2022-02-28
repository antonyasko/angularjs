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
      })
      .when('/author', {
        templateUrl: 'views/author.html',
        controller: 'AuthorCtrl',
      });
  },
]);

app.factory('state', function () {
  return {
    value: '',
    page: 1,
    data: [],
    activeAuthor: null,
  };
});
