angular
  .module('ecabinet')
  .component('list', {
    templateUrl: 'list/list.html',
    controller:  ListCtrl,
    bindings:    {
      profile: '<',
      viewedPodcasts: '<'
    }
  });

function ListCtrl(podcastFactory, GLOBAL_VARIABLES, $http) {
  var ctrl = this;

  ctrl.$onInit = $onInit;
  ctrl.showMore = showMore;
  ctrl.viewedPodcast = viewedPodcast;

  ctrl.episodes = podcastFactory.getAll();

  ctrl.skip = 0;
  ctrl.total = 0;

  function $onInit() {
    podcastFactory.getProfile();

    $http({
      method: 'GET',
      url: GLOBAL_VARIABLES.API_URL + '/podcast?limit=2&sort=date%20DESC'
    }).then(function successCallback(response) {
      if (response.data.length) {
        ctrl.episodes = response.data;
      }

      // this callback will be called asynchronously
      // when the response is available
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });

    $http({
      method: 'GET',
      url: GLOBAL_VARIABLES.API_URL + '/podcast/count'
    }).then(function successCallback(response) {
      ctrl.total = response.data;

      // this callback will be called asynchronously
      // when the response is available
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
  }

  function showMore() {
    ctrl.skip = ctrl.skip + 2;

    $http({
      method: 'GET',
      url: GLOBAL_VARIABLES.API_URL + '/podcast?limit=2&sort=date%20DESC&skip=' + ctrl.skip
    }).then(function successCallback(response) {
      if (response.data.length) {
        ctrl.episodes = ctrl.episodes.concat(response.data);
      }

      // this callback will be called asynchronously
      // when the response is available
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
  }

  function viewedPodcast(episode) {
    var usersViews = ctrl.viewedPodcasts.filter(view => view.user.id === ctrl.profile.id);
    var viewedIds = usersViews.map(view => view.podcast.id);
    if (viewedIds.includes(episode.id)) {
      return true;
    }

    return false;
  }
}
