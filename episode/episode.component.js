angular
  .module('ecabinet')
  .component('episode', {
    templateUrl: 'episode/episode.html',
    controller:  EpisodeCtrl,
    bindings:    {
    }
  });

function EpisodeCtrl($stateParams, podcastFactory, $http, GLOBAL_VARIABLES, $sce) {
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

    $http.get(GLOBAL_VARIABLES.API_URL + '/podcast/' + $stateParams.podcastId)
      .then(function successCallback(response) {
        ctrl.episode = response.data;

        if (ctrl.episode.reviews.length) {
          ctrl.reviews = ctrl.episode.reviews;

          ctrl.reviews.forEach(function(review) {
            $http.get(GLOBAL_VARIABLES.API_URL + '/review/' + review.id)
              .then(function success(response) {
                review.user = response.data.user;
              });
          });
        }

        ctrl.source = $sce.getTrustedResourceUrl(ctrl.episode.url + '&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"');
        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
  }

  function saveReview() {
    ctrl.writeReview = !ctrl.writeReview;

    $http.post(GLOBAL_VARIABLES.API_URL + '/review', {
      user: 1,
      description: 'abc'
    }).then(function successCallback(response) {
        ctrl.reviews.push({
          user: 1,
          description: 'abc'
        });

        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
  }
}
