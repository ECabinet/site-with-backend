angular
  .module('ecabinet')
  .component('episode', {
    templateUrl: 'episode/episode.html',
    controller:  EpisodeCtrl,
    bindings:    {
    }
  });

function EpisodeCtrl($stateParams, podcastFactory, $http, GLOBAL_VARIABLES) {
  var ctrl = this;
  ctrl.$onInit = $onInit;
  ctrl.saveReview = saveReview;

  function $onInit() {
    ctrl.reviews = [
      {
        user: 'John Smith',
        description: 'Vivamus eu elementum lectus. Etiam non enim eget dui eleifend tincidunt. Nam ornare ipsum eget ipsum gravida, vitae varius diam eleifend. Cras at consequat justo. Ut feugiat ligula eu viverra cursus. Donec maximus semper nulla eu lacinia. Sed fermentum id quam suscipit hendrerit. Curabitur laoreet sem sit amet magna cursus, ut tempus ex porta. Quisque venenatis, diam ut lacinia commodo, sem elit convallis felis, vitae ullamcorper justo nunc eu nulla.'
      },
      {
        user: 'Jane Doe',
        description: 'Nunc a facilisis diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque vitae dolor maximus, suscipit lectus eu, fermentum lacus. In hac habitasse platea dictumst. Etiam volutpat, mi a semper bibendum, justo ipsum dapibus elit, condimentum lacinia tellus purus sed ligula.'
      }
    ];

    ctrl.episode = podcastFactory.getById($stateParams.podcastId);
  }

  function saveReview() {
    debugger;
    ctrl.writeReview = !ctrl.writeReview;

    $http.post(GLOBAL_VARIABLES.API_URL + '/review', {
      userId: 1,
      rDescription: 'abc'
    }).then(function successCallback(response) {
        ctrl.reviews.push({
          userId: 1,
          rDescription: 'abc'
        });

        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
  }
}
