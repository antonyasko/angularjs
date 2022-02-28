angular.module('angularJSApp').controller('SearchCtrl', 
  function ($scope, $http, state) {
    const cardsOnPage = 20;
    
    $scope.repos = state.data;

    if (state.data.length === 0) {
      location.href = location.origin;
    }

    $scope.onCardClick = function($event) {
      location.href = location.origin + `/#!/author?authorName=${$event.target.dataset.author}`;
      state.activeAuthor = state.data.find(repo => repo.id === Number($event.target.dataset.repoId))?.owner;
    };

    $scope.onPaginationClick = function($event) {
      switch ($event.target.dataset.action) {
        case 'prev':
          if (state.page > 1) state.page -= 1;
          break;
        case 'next':
          if (state.data.length === 20) state.page += 1;
          break;
        default:
          break;
      }

      $http.get(
        `https://api.github.com/search/repositories?q=${state.value}&page=${state.page}&per_page=${cardsOnPage}`
      ).then((res) => {
        const repos = res?.data?.items;
        if (repos) {
          state.data = repos;
          $scope.repos = state.data;
          location.href = location.origin + `/#!/search?query=${state.value}&page=${state.page}`;
        }
      }).catch((err) => {
        console.log(err);
      });
    }
  },
);
