var myApp = angular.module('ecabinet', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider, $sceProvider, $httpProvider, $transitionsProvider, podcastFactory) {
  var landingState = {
    name: 'landing',
    url: '/',
    templateUrl: 'landing.html'
  };

  var listState = {
    name: 'podcasts',
    url: '/podcasts',
    component: 'list'
  };

  var episodeState = {
    name: 'episode',
    url: '/podcasts/{podcastId}',
    component: 'episode',
    resolve:   {
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

  $stateProvider.state(landingState);
  $stateProvider.state(listState);
  $stateProvider.state(episodeState);
  $stateProvider.state(mailingState);
  $stateProvider.state(loginState);

  $urlRouterProvider.otherwise('/');

  $sceProvider.enabled(false);

  $httpProvider.defaults.withCredentials = true;
});


function profileResolver($stateParams, multiDayPlanSaveInitialData) {
  return profileResolver($stateParams);
}