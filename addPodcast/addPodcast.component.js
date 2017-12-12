angular
  .module('ecabinet')
  .component('addPodcast', {
    templateUrl: 'addPodcast/addPodcast.html',
    controller:  AddPodcastCtrl,
    bindings:    {
    }
  });

function AddPodcastCtrl($http, GLOBAL_VARIABLES, $state) {
  var ctrl = this;

  ctrl.submit = submit;

  function submit() {
    $http.post(GLOBAL_VARIABLES.API_URL + '/podcast', {
      title: ctrl.title,
      date: ctrl.date,
      description: ctrl.description,
      timeLength: ctrl.length,
      url: ctrl.url,
      pic: ctrl.pic
    }).then(function successCallback(response) {
        $state.go('podcasts');

        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
  }
}
