angular.module('angularJSApp').controller('HomeCtrl', 
  function ($scope, $http, state) {
    $scope.state = state;

    $scope.onSearch = function() {
      const input = $scope.searchInput;
      if (input) {
        state.value = $scope.searchInput;

        $http.get(
          `https://api.github.com/search/repositories?q=${state.value}&page=${state.page}&per_page=20`
        ).then((res) => {
          state.data = res.data.items;
          location.href = location.origin + `/#!/search?query=${state.value}&page=${state.page}`;
        }).catch((err) => {
          console.log(err);
        });
      }
    };
  },
);
