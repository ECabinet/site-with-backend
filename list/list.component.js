angular
  .module('ecabinet')
  .component('list', {
    templateUrl: 'list/list.html',
    controller:  ListCtrl,
    bindings:    {
    }
  });

function ListCtrl(podcastFactory, GLOBAL_VARIABLES, $http) {
  var ctrl = this;

  ctrl.episodes = podcastFactory.getAll();

  $http({
    method: 'GET',
    url: GLOBAL_VARIABLES.API_URL + '/podcast'
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
}
