angular.module('angularJSApp').controller('AuthorCtrl', 
  function ($scope, state) {
    $scope.author = state.activeAuthor;
    $scope.page = state.page;
    $scope.value = state.value;

    if (state.activeAuthor === null) {
      location.href = location.origin;
    }
  },
);
