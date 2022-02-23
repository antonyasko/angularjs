angular.module('angularJSApp').controller('HomeCtrl', 
  function ($scope, searchValue) {
    $scope.searchValue = searchValue;

    $scope.onSearch = function() {
      searchValue.value = $scope.searchInput;
    };
  },
);
