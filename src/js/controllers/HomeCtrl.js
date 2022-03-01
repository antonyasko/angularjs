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
          const items = res?.data?.items;

          if (items?.length) {
            state.data = res.data.items;
            state.searchMessage = '';
            location.href = location.origin + `/#!/search?query=${state.value}&page=${state.page}`;
          } else {
            state.searchMessage = 'There are no results';
          }
        }).catch((err) => {
          console.log(err);
        });
      }
    };
  },
);
