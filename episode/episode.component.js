angular
  .module('ecabinet')
  .component('episode', {
    templateUrl: 'episode/episode.html',
    controller:  EpisodeCtrl,
    bindings:    {
      profile: '<',
      viewedPodcasts: '<'
    }
  });

function EpisodeCtrl($stateParams, podcastFactory, $http, GLOBAL_VARIABLES, $sce) {
  var ctrl = this;
  ctrl.$onInit = $onInit;
  ctrl.saveReview = saveReview;

  function $onInit() {
    ctrl.reviews = [];

    var usersViews = ctrl.viewedPodcasts.filter(view => view.user.id === ctrl.profile.id);

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

        var viewedIds = usersViews.map(view => view.podcast.id);
        if (!viewedIds.includes(ctrl.episode.id)) {
          $http.post(GLOBAL_VARIABLES.API_URL + '/viewedPodcast', {
            user: ctrl.profile.id,
            podcast: ctrl.episode.id,
          }).then(function successCallback(response) {
              // this callback will be called asynchronously
              // when the response is available
            }, function errorCallback(response) {
              // called asynchronously if an error occurs
              // or server returns response with an error status.
            });
        }
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
      user: ctrl.profile.id,
      podcast: ctrl.episode.id,
      description: ctrl.description,
      rating: ctrl.rating
    }).then(function successCallback(response) {
        ctrl.reviews.push({
          user: ctrl.profile,
          podcast: ctrl.episode.id,
          description: ctrl.description,
          rating: ctrl.rating
        });

        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
  }
}
