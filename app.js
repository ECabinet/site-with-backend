var myApp = angular.module('ecabinet', ['ui.router', 'angular-typed', 'LocalStorageModule']);

myApp.config(function($stateProvider, $urlRouterProvider, $sceProvider, $httpProvider, $transitionsProvider) {
  var landingState = {
    name: 'landing',
    url: '/',
    templateUrl: 'landing.html'
  };

  var listState = {
    name: 'podcasts',
    url: '/podcasts',
    component: 'list',
    resolve:   {
      viewedPodcasts: function($http, GLOBAL_VARIABLES) {
        return $http({
          method: 'GET',
          url: GLOBAL_VARIABLES.API_URL + '/viewedPodcast'
        }).then(function successCallback(response) {
          return response.data;
        });
      },
      profile: function($http, GLOBAL_VARIABLES) {
        return $http({
          method: 'GET',
          url: GLOBAL_VARIABLES.API_URL + '/me'
        }).then(function successCallback(response) {
          return response.data.me;
        });
      }
    }
  };

  var episodeState = {
    name: 'episode',
    url: '/podcasts/{podcastId}',
    component: 'episode',
    resolve:   {
      viewedPodcasts: function($http, GLOBAL_VARIABLES) {
        return $http({
          method: 'GET',
          url: GLOBAL_VARIABLES.API_URL + '/viewedPodcast'
        }).then(function successCallback(response) {
          return response.data;
        });
      },
      profile: function($http, GLOBAL_VARIABLES) {
        return $http({
          method: 'GET',
          url: GLOBAL_VARIABLES.API_URL + '/me'
        }).then(function successCallback(response) {
          return response.data.me;
        })
      }
    }
  };

  var mailingState = {
    name: 'mailing',
    url: '/mailing',
    component: 'mailing'
  };

  var loginState = {
    name: 'login',
    url: '/login',
    component: 'login'
  };

  var addPodcastState = {
    name: 'addPodcast',
    url: '/podcast/create',
    component: 'addPodcast'
  };

  $stateProvider.state(landingState);
  $stateProvider.state(listState);
  $stateProvider.state(episodeState);
  $stateProvider.state(mailingState);
  $stateProvider.state(loginState);
  $stateProvider.state(addPodcastState);

  $urlRouterProvider.otherwise('/');

  $sceProvider.enabled(false);

  $httpProvider.defaults.withCredentials = true;
});
